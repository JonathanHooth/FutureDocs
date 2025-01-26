from flask import Flask, url_for, request, redirect, render_template, flash, jsonify, session
from flask_migrate import Migrate 
from flask_sqlalchemy import SQLAlchemy 
from flask_login import LoginManager, logout_user, login_user, current_user, UserMixin, login_required
from datetime import datetime
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from werkzeug.security import generate_password_hash
from werkzeug.utils import secure_filename
from uuid import uuid4


app = Flask(__name__)

app.config['SECRET_KEY'] = 'your_secret_key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
migrate = Migrate(app, db)
CORS(app, supports_credentials=True)
login_manager = LoginManager()
login_manager.login_view = 'login'
login_manager.init_app(app)

def get_uuid():
    return uuid4().hex

@login_manager.user_loader

def load_user(user_id):
    return User.query.get(int(user_id))

class User(db.Model, UserMixin):
    __tablename__ = "users"
    id = db.Column(db.String(11), primary_key=True, unique=True, default=get_uuid)
    email = db.Column(db.String(150), unique=True)
    password = db.Column(db.Text, nullable=False)
    

    def __repr__(self):
        return f"<User {self.email}>"


class Opportunity(db.Model):
    __tablename__ = 'opportunities'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=False)
    description = db.Column(db.Text, nullable=False)
    location = db.Column(db.String(120), nullable=False)
    date_posted = db.Column(db.DateTime, default=datetime.utcnow)
    professional_id = db.Column(db.String(11), db.ForeignKey('users.id'), nullable=False)

    professional = db.relationship('User', backref='posted_opportunities', lazy=True)

    def __repr__(self):
        return f"<Opportunity {self.title}, posted by {self.professional_id}>"



class Application(db.Model):
    __tablename__ = 'applications'

    id = db.Column(db.Integer, primary_key=True)
    opportunity_id = db.Column(db.Integer, db.ForeignKey('opportunities.id'), nullable=False)
    student_id = db.Column(db.String(11), db.ForeignKey('users.id'), nullable=False)
    status = db.Column(db.String(50), default="Pending")

    opportunity = db.relationship('Opportunity', backref='applications', lazy=True)
    student = db.relationship('User', backref='applied_opportunities', lazy=True)

    def __repr__(self):
        return f"<Application by User {self.student_id} for Opportunity {self.opportunity_id} with status {self.status}>"

with app.app_context():
    db.create_all()

@app.route("/login", methods=["POST"])
def login():
    email = request.json["email"]
    password = request.json["password"]

    
    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"error": "Unauthorized Access"}), 401

    
    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401

    
    login_user(user)
    session["user_id"] = user.id

    return jsonify({
        "id": user.id,
        "email": user.email
    })

@app.route("/signup", methods=["POST"])
def signup():
    email = request.json["email"]
    password = request.json["password"]

    
    if User.query.filter_by(email=email).first():
        return jsonify({"error": "Email already exists"}), 409


    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    new_user = User(email=email, password=hashed_password)
    
    db.session.add(new_user)
    db.session.commit()

    
    login_user(new_user)  
    
    return jsonify({
        "id": new_user.id,
        "email": new_user.email
    })

@app.route('/contact_info', methods=['POST'])
@login_required
def contact():
    
    if current_user.user_type != 'professional':  
        return jsonify({"error": "Unauthorized Access"}), 401
      
    data = request.get_json()   
    
    
   
    opportunity = Opportunity(
        title=data.get('title'),
        description=data.get('description'),
        location=data.get('location'),
        professional_id=current_user.id,  
    )  
    db.session.add(opportunity)
    db.session.commit()
    
    return jsonify({"message": "Opportunity posted successfully", "opportunity_id": opportunity.id}), 201


@app.route('/filter_application', methods=['GET'])
@login_required
def search_application():
    id = request.args.get("id")  

    query = Application.query
    if id:
        query = query.filter(
            Application.user_id == id  
        )
    
    applications = query.all()  
    results = [
        {"id": app.id, "title": app.title, "description": app.description, "location": app.location}
        for app in applications
    ]
    
    return jsonify(results)



@app.route('/api/search_opportunities', methods=['GET'])
@login_required
def search_opportunities():
    keyword = request.args.get('keyword')  
    location = request.args.get('location')

    query = Opportunity.query
    if keyword:
        query = query.filter(
            Opportunity.title.like(f'%{keyword}%') |
            Opportunity.description.like(f'%{keyword}%')
        )
    if location:
        query = query.filter(Opportunity.location.like(f'%{location}%'))

    opportunities = query.all()
    results = [
        {"title": opp.title, "description": opp.description, "location": opp.location}
        for opp in opportunities
    ]

    return jsonify(results)



@app.route('/logout')
@login_required
def logout():
    logout_user()
    flash("You have successfully logged out.", "info")
    return redirect(url_for('login'))

if __name__ == "__main__":
    app.run(debug=True)




