from fastapi import APIRouter

router = APIRouter()

# Example route
@router.get("/")
def get_reports():
    return {"message": "Reports endpoint working"}
