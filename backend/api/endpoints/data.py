from fastapi import APIRouter, Depends
from typing import List
from database.connection import AsyncIOMotorClient, get_mongo_database
from model.microblog import Microblog
from model.category import Category

router = APIRouter()

@router.post("/post-blog", response_model=Microblog)
async def post_blog(microblog: Microblog, db: AsyncIOMotorClient = Depends(get_mongo_database)) -> Microblog:
    collection = db[getCollectionFromCategory(microblog.category)]
    collection.insert_one(dict(microblog))
    return microblog

@router.get("/get-blogs/{category}", response_model=List[Microblog])
async def get_blog(category: str, db: AsyncIOMotorClient = Depends(get_mongo_database)) -> List[Microblog]:
    cursor = db[getCollectionFromCategory(category)].find()
    resp: List[Microblog] = []
    for document in await cursor.to_list(length=100):
        del document["_id"]
        resp.append(document)
    return resp

@router.get("/get-categories", response_model=List[Category])
async def get_blog(db: AsyncIOMotorClient = Depends(get_mongo_database)) -> List[Category]:
    cursor = db['categories'].find()
    resp: List[Category] = []
    for document in await cursor.to_list(length=100):
        del document["_id"]
        resp.append(document)
    return resp

@router.post("/create-category", response_model=Category)
async def create_category(category: Category, db: AsyncIOMotorClient = Depends(get_mongo_database)) -> Category:
    collection = db['categories']
    collection.insert_one(dict(category))
    return category

def getCollectionFromCategory(category) -> str:
    return category.replace(" ", "").lower()