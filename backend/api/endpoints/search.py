from fastapi import APIRouter, Depends
from typing import List
from database.connection import AsyncIOMotorClient, get_mongo_database
from model.microblog import Microblog

router = APIRouter()

@router.get("/search-blogs/{search_string}", response_model=List[Microblog])
async def search_blog(search_string: str, db: AsyncIOMotorClient = Depends(get_mongo_database)) -> Microblog:
    print (search_string)
    cursor = db[get_collection_from_category('general')].find()
    resp: List[Microblog] = []
    for document in await cursor.to_list(length=100):
        del document["_id"]
        resp.append(document)
    return resp

def get_collection_from_category(category) -> str:
    return category.replace(" ", "").lower()