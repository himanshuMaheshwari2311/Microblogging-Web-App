from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from database.connection import connect_to_mongodb, close_connection
from api.api import api_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.add_event_handler("startup", connect_to_mongodb)
app.add_event_handler("shutdown", close_connection)
app.include_router(api_router, prefix='/v1')

@app.get("/")
async def root():
    return {"message": "Hello world it's Himanshu"}
