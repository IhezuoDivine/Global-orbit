from fastapi import FastAPI
from .database import Base, engine
from app.routers import auth, posts, users, interactions

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(auth.router)
app.include_router(posts.router)
app.include_router(users.router)
app.include_router(interactions.router)


@app.get("/")
def home():
    return {"message": "Social backend running"}