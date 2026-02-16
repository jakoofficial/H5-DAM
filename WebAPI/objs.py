from dataclasses import dataclass

@dataclass
class DAMGroup():
    groupID: int = 0
    groupName: str = ""


@dataclass
class DAMUser():
    userID: int = 0
    Username: str = ""
    Password: str = ""