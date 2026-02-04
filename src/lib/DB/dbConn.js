import sqlite3 from "sqlite3";

const db = new sqlite3.Database("test.db");
let sql = "SELECT * FROM tester";

let data = db.all(sql, getData);
console.log(data)

// @ts-ignore
function getData(err, rows) {
    if (err) {
        console.log(err.message);
        return;
    }
    return rows[0];
}
db.close();