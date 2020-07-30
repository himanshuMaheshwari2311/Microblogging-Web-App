from fastAPI import APIRouter

router = APIRouter()


@router.post("/post_message")
def post_message():
    return {"message": "Hello world it's Himanshu"}