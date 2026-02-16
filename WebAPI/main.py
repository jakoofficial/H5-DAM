from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from security import *
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
def addnew_group(groupName:str):
    con = sqlite3.connect("DAMDB.db")
    cur = con.cursor()
    cur.execute(f"INSERT INTO Groups(GroupName) Values(?)", (groupName,))
    con.commit()
    con.close()

#Needs security
@app.delete("/api/removegroup")
def remove_group(groupName):
    con = sqlite3.connect("DAMDB.db")
    cur = con.cursor()
    cur.execute(f"DELETE FROM Groups WHERE GroupName=?", (groupName,))
    con.commit()
    con.close()
    pass

@app.get("/api/get_groups_on_user")
def get_groups_on_user(userID):
    con = sqlite3.connect("DAMDB.db")
    cur = con.cursor()
    res = cur.execute(f"SELECT * FROM GroupList WHERE UserID =?", (userID,))
    resList = res.fetchall()
    con.close()
    return resList

@app.get("/api/get_groups")
def get_groups():
    con = sqlite3.connect("DAMDB.db")
    cur = con.cursor()
    res = cur.execute(f"SELECT * FROM Groups")
    resList = res.fetchall()
    con.close()
    return resList

@app.post("/api/create_new_user")
def create_user(username: str, password: str):
    con = sqlite3.connect("DAMDB.db")
    cur = con.cursor()
    check = cur.execute(f"SELECT Username FROM User WHERE Username=?", (username,))
    if check.fetchone() is not None:
        print(check.fetchone())
        con.close()
        return f"Username: ({username}) is already in use!"
    res = cur.execute(f"INSERT INTO User(Username, Password) VALUES(?, ?)", (username, set_password_hash(password)))
    con.commit()
    con.close()