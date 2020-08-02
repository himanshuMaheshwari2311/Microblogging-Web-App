from pydantic import BaseModel
from typing import List

class Microblog(BaseModel):
    tags: List[str]
    message: str
    timestamp: str
    author: str
    title: str
    category: str


    def __iter__(self):
        yield 'tags', self.tags
        yield 'message', self.message
        yield 'timestamp', self.timestamp
        yield 'author', self.author
        yield 'title', self.title
        yield 'category', self.category
        
