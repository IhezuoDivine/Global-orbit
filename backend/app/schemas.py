from pydantic import BaseModel


class UserCreate(BaseModel):
    username: str
    email: str
    password: str


class PostCreate(BaseModel):
    content: str


class CommentCreate(BaseModel):
    text: str
    post_id: int