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



app.config['SECRET_KEY']= 'your_secret_key'
app.config['SQLALCHEMY_DATBASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_TEST_MODICIATION'] = False


db = SQLAlchemy(app)
migrate= Migrate(db,app)
CORS(app,supports_credentials=True)

