from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.params import Body, Header
from security import *
import sqlite3
from objs import *
import secrets
from datetime import date, timedelta

app = FastAPI()

origins=[
    "http://localhost:5173",
    "http://127.0.0.1:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
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

@app.get("/api/getfriends")
def getfriendsofuser(sessionToken:str = Header(...)):
    con = sqlite3.connect("DAMDB.db")
    cur = con.cursor()
    # res = cur.execute(f"SELECT User.Username FROM User INNER JOIN FriendsList On FriendsList.FriendID = User.UserID WHERE FriendsList.UserID=?", (userID,))
    res = cur.execute(f"SELECT User.Username FROM User INNER JOIN FriendsList On FriendsList.FriendID = User.UserID INNER JOIN Sessions On Sessions.UserID = FriendsList.UserID WHERE Sessions.SessionToken = ?", (sessionToken,))
    frList = res.fetchall()
    con.close()
    return frList

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

@app.post("/api/signin")
def signin_user(username:str=Body(...), given_password:str=Body(...)):
    err:int = 0
    con = sqlite3.connect("DAMDB.db")
    cur = con.cursor()
    u = cur.execute(f"SELECT UserID, Username, Password FROM User WHERE Username=?", (username,))
    user = u.fetchone()
    if user == None or user == 'NoneType': err+=1
    else: 
        res = verify_password(given_password, user[2])
        if res == False: err+=1
    if err > 0:
        con.close()
        raise HTTPException(status_code=401, detail="Invalid credentials")

    #check if session already exists on user
    check = cur.execute(f"SELECT * FROM Sessions WHERE UserID=?", (user[0],))
    checked = check.fetchone()
    if checked != None: print("Session already exists"); con.close(); return checked[1]
    #Add to session table
    enddate = date.today() + timedelta(days=1)
    token = secrets.token_urlsafe(32)
    session = cur.execute(
        f"INSERT INTO Sessions(SessionToken, EndDate, UserID) VALUES(?, ?, ?)", 
        (token, enddate, user[0]))
    con.commit()
    con.close()
    return {"token": token}

@app.delete("/api/signout")
def signout(session_token:str=Header(...)):
    con = sqlite3.connect("DAMDB.db")
    cur = con.cursor()
    cur.execute(f"DELETE FROM Sessions WHERE SessionToken=?", (session_token,))
    con.commit()
    con.close()
    pass