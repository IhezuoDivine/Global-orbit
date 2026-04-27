from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import get_db
from .. import models, schemas

router = APIRouter(prefix="/posts", tags=["posts"])


@router.post("/")
def create_post(post: schemas.PostCreate, db: Session = Depends(get_db)):
    new_post = models.Post(content=post.content, owner_id=1)
    db.add(new_post)
    db.commit()
    return {"message": "Post created"}


@router.get("/")
def get_posts(db: Session = Depends(get_db)):
    return db.query(models.Post).all()