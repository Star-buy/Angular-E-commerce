const mysql = require("mysql2");
const createTables = require("./config");
const Promise = require("bluebird");
const database = "registrer";

const connection = mysql.createConnection({
  user: "root",
  password: "Root",
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

const getAllNames = (username, callback) => {
  const sql = "SELECT * FROM accounts WHERE username = ? ";
  connection.query(sql, [username], (err, result) => {
    callback(err, result);
  });
};

const getAllEmails = (email, callback) => {
  const sql = "SELECT * FROM accounts WHERE email = ? ";
  connection.query(sql, [email], (err, result) => {
    callback(err, result);
  });
};

const signup = (username, email, image, password, callback) => {
  const sql =
    "INSERT INTO accounts (username,email,image,password) VALUES (?,?,?,?)";
  connection.query(sql, [username, email, image, password], (err, result) => {
    callback(err, result);
  });
};

const getPasswordByEmail = (email, callback) => {
  const sql = "SELECT password FROM accounts WHERE email = ?;";
  connection.query(sql, [email], (err, result) => {
    callback(err, result);
  });
};


const getUserName=(email ,callback) =>{
const sql = "SELECT username, image FROM accounts WHERE email = ?;"
connection.query(sql,[email], (err, result) =>{
    callback(err,result)
})
}

const postItem =(title,description,image,price,callback)=>{
const sql = "INSERT INTO items (title,description,image,price) VALUES (?,?,?,?)"
connection.query(sql, [title, description,image, price],(err,result)=>{
  callback(err, result)
})
}

const getItem =(callback)=>{
  const sql = "SELECT * FROM items;"
  connection.query(sql,(err, result)=>{
    callback(err, result)
  })
}


db.connectAsync()
  .then(() =>
    console.log(`Connected to ${database} database as ID ${db.threadId}`)
  )
  .then(() => db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${database}`))
  .then(() => db.queryAsync(`USE ${database}`))
  .then(() => createTables(db));

module.exports = { getAllNames, getAllEmails, signup, getPasswordByEmail,getUserName ,postItem,getItem};
