import sqlite3 from "sqlite3";

const db = new sqlite3.Database("test.db");
let sql = "SELECT * FROM tester";

const data = db.all(sql);
console.log(db.get("select * from tester"));
db.close();
