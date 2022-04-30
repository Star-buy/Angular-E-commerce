const mysql = require("mysql2");
const Promise = require("bluebird");
const createTables = require("./config");
const database = "registrer";
require("dotenv").config();

const connection = mysql.createConnection({
  user: process.env.MYSQL_USERname,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
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
