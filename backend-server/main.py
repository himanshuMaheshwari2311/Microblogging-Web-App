from fastapi import FastAPI
import motor.motor_asyncio


DATABASE_URL = "mongodb://192.168.99.100:27017"
client = motor.motor_asyncio.AsyncIOMotorClient(
    DATABASE_URL, uuidRepresentation="standard"
)
db = client['microblogging']
app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello world it's Himanshu"}


