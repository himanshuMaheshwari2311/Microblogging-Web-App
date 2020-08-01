from fastapi import APIRouter, Depends
from typing import List
from database.connection import AsyncIOMotorClient, get_mongo_database
from model.microblog import Microblog

router = APIRouter()

@router.post("/post-blog")
async def post_blog(microblog: Microblog, db: AsyncIOMotorClient = Depends(get_mongo_database)) -> Microblog:
    collection = db[microblog.tag]
    collection.insert_one(dict(microblog))
    return microblog

@router.post("/get-blogs/{tag}", response_model=List[Microblog])
async def get_blog(tag: str, db: AsyncIOMotorClient = Depends(get_mongo_database)) -> List[Microblog]:
    cursor = db[tag].find()
    resp: List[Microblog] = []
    for document in await cursor.to_list(length=100):
        del document["_id"]
        resp.append(document)
    return resp