// @ts-ignore
import sqlite3 from "sqlite3";

const db = new sqlite3.Database("src/lib/DB/database.db");

const COMDS = {
    "GetAllData":"SELECT * FROM Groups",
    "AddNewGroup":"INSERT INTO Groups(GroupName) Values(?)",
    "RemoveGroup":"DELETE FROM Groups WHERE GroupID=?",
    "UpdateGroup":`UPDATE Groups SET GroupName=? WHERE GroupID=?`,
}

// @ts-ignore
// @ts-ignore
const getAll = async (db, sql, params) => {
  return new Promise((resolve, reject) => {
// @ts-ignore
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
};

// @ts-ignore
const getFirst = async (db, sql, params) => {
  return new Promise((resolve, reject) => {
// @ts-ignore
    db.get(sql, params, (err, row) => {
      if (err) reject(err);
      resolve(row);
    });
  });
};

// @ts-ignore
const query = async (db, sql, params = []) => {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    db.run(sql, params, (err) => {
      if (err) {
        reject(new Error("ERR: "+err+"\nUsing SQL: "+sql+"\nParams: "+params));
      } else {
// @ts-ignore
        resolve();
      }
    });
  });
};

// @ts-ignore
let recievedData = [];

await query(db, COMDS.AddNewGroup, ['Tesslkadjst'])
// @ts-ignore
console.log(await getAll(db, sql))
db.close();