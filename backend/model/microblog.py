from pydantic import BaseModel
from typing import List

class Microblog(BaseModel):
    message: str
    timestamp: str
    author: str
    title: str
    category: str

    def __iter__(self):
        yield 'message', self.message
        yield 'timestamp', self.timestamp
        yield 'author', self.author
        yield 'title', self.title
        yield 'category', self.category