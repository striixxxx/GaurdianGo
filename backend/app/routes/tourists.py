from fastapi import APIRouter

router = APIRouter()

tourists_data = [
    {"id": "T001", "name": "Sarah Johnson", "digitalId": "DID-2024-001", "country": "USA", "location": "Red Fort, Delhi", "status": "At Risk", "safetyScore": 65, "lastSeen": "10 minutes ago", "phone": "+1-555-0123"},
    {"id": "T002", "name": "Mike Chen", "digitalId": "DID-2024-002", "country": "Canada", "location": "Gateway of India, Mumbai", "status": "Safe", "safetyScore": 95, "lastSeen": "5 minutes ago", "phone": "+1-555-0124"},
]

@router.get("/")
def get_tourists():
    return tourists_data
