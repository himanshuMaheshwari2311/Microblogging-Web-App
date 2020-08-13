from fastapi import APIRouter

from .endpoints import data, search

api_router = APIRouter()
api_router.include_router(data.router)
api_router.include_router(search.router)