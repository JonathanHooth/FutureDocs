from typing import Optional, List
from pydantic import BaseModel
from datetime import datetime, date

class Job(BaseModel):
  title: str
  date: datetime
  phone : str
  email: str
  author: str
  description: str
  location: str


class User(BaseModel):
  name: str
  phone : str
  email: str
  location: str
  school: str
  year: int
  experience: str
