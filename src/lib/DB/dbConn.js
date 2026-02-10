// @ts-ignore
import sqlite3 from "sqlite3";

const db = new sqlite3.Database("src/lib/DB/database.db");

const COMDS = {
    "GetAllData":"SELECT * FROM Groups",
    "AddNewGroup":"INSERT INTO Groups(GroupName) Values(?)"
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
const addNew = async (db, sql, params = []) => {
  if (params && params.length > 0) {
    return new Promise((resolve, reject) => {
// @ts-ignore
      db.run(sql, params, (err) => {
        if (err) reject(err);
        // @ts-ignore
        resolve();
      });
    });
  }
  return new Promise((resolve, reject) => {
// @ts-ignore
    db.exec(sql, (err) => {
      if (err) reject(err);
      // @ts-ignore
      resolve();
    });
  });
};


// @ts-ignore
let recievedData = [];
let sql = COMDS.GetAllData;

// await addNew(db, "INSERT INTO Groups(Field2) VALUES(?)", ["Inserted from Code"]);
await addNew(db, COMDS.AddNewGroup, ["TestGroup1"]);
// @ts-ignore
console.log(await getAll(db, sql))
db.close();