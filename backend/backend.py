from fastapi import FastAPI, HTTPException, Depends, Query, Path
from fastapi.middleware.cors import CORSMiddleware

from datetime import datetime

#Import Models here
import DBModels.models
from APIModels.models import Job 

from typing import List, Optional, Annotated

from database import engine, SessionLocal
from sqlalchemy.orm import Session

app = FastAPI()

origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DBModels.models.Base.metadata.create_all(bind=engine)

def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()


@app.get("/")
async def base():
    return {"base"}


@app.get("/api/users")
async def get_all_users(db: Session = Depends(get_db)):
    return db.query(DBModels.models.User).all()


@app.post("/api/create_job_json")
async def create_job(job: Job, db: Session = Depends(get_db)):
  
  new_job = DBModels.models.Job(
        title=job.title,
        date=datetime.now(),  # Default value
        author=job.author,
        description=job.description,
        location=job.location,
        email=job.email,
        phone=job.phone,
    )



  db.add(new_job)
  db.commit()

  return {"message": "Job added successfully", "job": new_job}



@app.post("/api/create_job/{title}/{author}/{description}/{location}/{email}/{phone}")
async def create_job(title : str,
                      author: str,
                      description : str,
                      location : str,
                      email : str,
                      phone : str,
                       db: Session = Depends(get_db)):

  date = datetime.now()

  newJob = Job(title=title, date=date, author=author, description=description, location=location, email=email, phone=phone)
  
  #Converting python object to sql object
  new_job = DBModels.models.Job()
  new_job.title = newJob.title
  new_job.date = newJob.date
  new_job.author = newJob.author
  new_job.description = newJob.description
  new_job.location = newJob.location
  new_job.email = newJob.email
  new_job.phone = newJob.phone



  db.add(new_job)
  db.commit()

  return {"message": "Job added successfully", "job": new_job}



@app.get("/api/jobs")
async def get_all_jobs(db: Session = Depends(get_db)):
  return db.query(DBModels.models.Job).all()

@app.get("/api/new_jobs")
async def get_new_jobs(db: Session = Depends(get_db)):
  return db.query(DBModels.models.Job).order_by(DBModels.models.Job.date.desc()).limit(4).all()

@app.get("/api/jobs/{id}")
async def get_selected_job(id : int, db: Session = Depends(get_db)):
  return db.query(DBModels.models.Job).filter(DBModels.models.Job.id == id).first()