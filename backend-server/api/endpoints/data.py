from fastapi import APIRouter, Depends
from database.connection import AsyncIOMotorClient, get_mongo_client

router = APIRouter()

@router.get("/post_blog")
async def post_blog(client: AsyncIOMotorClient = Depends(get_mongo_client)):
    document = {'message': "This is my first blog"}
    db = client['microblogging']
    collection = db['beginnersbook']
    collection.insert_one(document)
    return {"message": "Hello world it's call from post_blog"}

@router.get("/get_blog")
async def get_blog(client: AsyncIOMotorClient = Depends(get_mongo_client)):
    return {"message": "Hello world it's call from get_blog"}