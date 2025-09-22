# backend/app/routes/alerts.py
from fastapi import APIRouter
from typing import List
from pydantic import BaseModel

router = APIRouter()

# Pydantic schema
class Alert(BaseModel):
    id: str
    tourist: str
    type: str
    location: str
    severity: str
    status: str
    timestamp: str
    description: str
    coordinates: str

# Sample data
alerts_data = [
    {
        "id": "A001",
        "tourist": "Sarah Johnson",
        "type": "Panic Button",
        "location": "Red Fort, Delhi",
        "severity": "High",
        "status": "Active",
        "timestamp": "2024-01-15 14:32:15",
        "description": "Emergency button pressed by tourist",
        "coordinates": "28.6562, 77.2410",
    },
    {
        "id": "A002",
        "tourist": "Mike Chen",
        "type": "Geo-fence Breach",
        "location": "Restricted Area, Mumbai",
        "severity": "Medium",
        "status": "Acknowledged",
        "timestamp": "2024-01-15 14:17:42",
        "description": "Tourist entered restricted zone without authorization",
        "coordinates": "19.0760, 72.8777",
    },
]

# GET all alerts
@router.get("/", response_model=List[Alert])
def get_alerts():
    return alerts_data
