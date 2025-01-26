from typing import Optional, List
from pydantic import BaseModel
from datetime import date

class Job(BaseModel){
  title: str
  date: date
  author: str
  description: str
  location: str
}

class User(BaseModel){
  name: str
  email: str
  location: str
  school: str
  year: int
  experience: str

}