from sqlalchemy import Integer, Column, String, ForeignKey, DateTime
from typing import List
from sqlalchemy.orm import relationship, Mapped, mapped_column
from datetime import datetime
from database import Base


class Job(Base):
  __tablename__= "jobs"
  
  id = Column(Integer, primary_key=True, index=True)
  title = Column(String(120), nullable=False)
  date = Column(DateTime, default=datetime.now)

  description = Column(String(), nullable=True)
  location = Column(String(200), nullable=True)

  author: Mapped["User"] = relationship(back_populates="job_list")
  author_id: Mapped[int] = mapped_column(ForeignKey("users.id"))


class User(Base):
  __tablename__= "users"
  id = Column(Integer, primary_key=True, autoincrement=True)  # Primary key
  name = Column(String(100), nullable=False)  # User name
  phone = Column(String(20), nullable=True)  # User phone number (nullable)
  email = Column(String(150), unique=True, nullable=False)  # User email (unique)
  location = Column(String(200), nullable=True)  # User location (nullable)
  school = Column(String(200), nullable=True)  # User school (nullable)
  year = Column(String(10), nullable=True)  # User year (nullable)
  experience = Column(String(), nullable=True)  # User experience (nullable)

  job_list: Mapped[List["Job"]] = relationship(back_populates="author")

  def repr(self):
      return f"<User {self.name}, {self.email}>"
