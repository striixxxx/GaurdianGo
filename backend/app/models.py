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