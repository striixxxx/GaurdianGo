from pydantic import BaseModel

class Tourist(BaseModel):
    id: str
    name: str
    digitalId: str
    country: str
    location: str
    status: str
    safetyScore: int
    lastSeen: str
    phone: str

from sqlalchemy import Column, Integer, String
from .database import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    password = Column(String)