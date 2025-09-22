from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import tourists
from fastapi.staticfiles import StaticFiles
from app.routes import alerts ,auth
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # for testing
    allow_methods=["*"],
    allow_headers=["*"],
)
from .database import Base, engine
from . import models

Base.metadata.create_all(bind=engine)

app.include_router(tourists.router, prefix="/tourists", tags=["Tourists"])
app.include_router(alerts.router, prefix="/alerts", tags=["Alerts"])
app.include_router(auth.router) 

app.mount("/", StaticFiles(directory="static", html=True), name="static")

