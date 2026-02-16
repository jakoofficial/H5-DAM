from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import sqlite3
from objs import *

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"],
)

@app.get("/api/hello")
def read_root():
    return {"Hello": "World"}

@app.post("/api/addnewgroup")
def addnew_group(groupName):
    con = sqlite3.connect("DAMDB.db")
    cur = con.cursor()
    cur.execute(f"INSERT INTO Groups(GroupName) Values(?)", (groupName))
    con.commit()
    con.close()

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
    return {"item_id": item_id, "q": q}