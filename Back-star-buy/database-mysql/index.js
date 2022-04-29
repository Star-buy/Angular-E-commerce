const mysql = require("mysql2");
const Promise = require("bluebird");
const createTables = require("./config");
const database = "registrer";

const connection = mysql.createConnection({
  user: "root",
  password: "Root",
  database:  "registrer",
});
const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() =>
    console.log(`Connected to ${database} database as ID ${db.threadId}`)
  )
  .then(() => db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${database}`))
  .then(() => db.queryAsync(`USE ${database}`))
  .then(() => createTables(db));
module.exports = connection;
