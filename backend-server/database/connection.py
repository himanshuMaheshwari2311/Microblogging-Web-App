from motor.motor_asyncio import AsyncIOMotorClient
import logging

DATABASE_URL = "mongodb://192.168.99.100:27017"

client = None

async def connect_to_mongodb():
    logging.info("Establishing a mongo db connection")
    global client
    try:
        client = AsyncIOMotorClient(DATABASE_URL, uuidRepresentation="standard") 
    except:
        logging.error("Could not establish connection to mongo db")
    logging.info("Established mongo db connection")
    
async def close_connection():
    logging.info("Closing connection to mongo db")
    global client
    client.close()
    logging.info("Closed connection to mongo db")

async def get_mongo_client() -> AsyncIOMotorClient:
    global client
    return client