from pydantic import BaseModel

class Microblog(BaseModel):
    tag: str
    message: str
    timestamp: str
    author: str

    def __iter__(self):
        yield 'tag', self.tag
        yield 'message', self.message
        yield 'timestamp', self.timestamp
        yield 'author', self.author