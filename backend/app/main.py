from fastapi import  FastAPI 
app = FastAPI()

students = {
    1:{
        "name":"Divine",
        "age": 22,
        "year":"year 5"
    }
}

@app.get("/")
def index():
    return["name","First Data"]
