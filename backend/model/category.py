from pydantic import BaseModel
from typing import List

class Category(BaseModel):
    collection: str
    category: str

    def __iter__(self):
        yield 'collection', self.collection
        yield 'category', self.category