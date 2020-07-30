from fastapi import APIRouter

from .endpoints import post_message

api_router = APIRouter()
api_router.include_router(post_message.router, tags=["post_message"])