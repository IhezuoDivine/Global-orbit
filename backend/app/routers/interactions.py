from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import get_db
from .. import models

router = APIRouter(prefix="/interactions", tags=["interactions"])


@router.post("/follow")
def follow(user_id: int, target_id: int, db: Session = Depends(get_db)):
    follow = models.Follow(follower_id=user_id, following_id=target_id)
    db.add(follow)
    db.commit()
    return {"message": "followed"}


@router.post("/repost")
def repost(user_id: int, post_id: int, db: Session = Depends(get_db)):
    r = models.Repost(user_id=user_id, post_id=post_id)
    db.add(r)
    db.commit()
    return {"message": "reposted"}