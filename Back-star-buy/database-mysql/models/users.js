const connection = require("../index");

module.exports = {
  //a function which fetches all the users.
  getAll: function (callback) {
    const sql = "SELECT * FROM `accounts`";
    connection.query(sql, function (error, results, fields) {
      callback(error, results);
    });
  },
  signup: function (username, email, image, password, callback) {
    const sql =
      "INSERT INTO accounts (username,email,image,password) VALUES (?,?,?,?)";
    connection.query(sql, [username, email, image, password], (err, result) => {
      callback(err, result);
    });
  },
  getAllNames: function (username, callback) {
    const sql = "SELECT * FROM accounts WHERE username = ? ";
    connection.query(sql, [username], (err, result) => {
      callback(err, result);
    });
  },
  getAllEmails: function (email, callback) {
    const sql = "SELECT * FROM accounts WHERE email = ? ";
    connection.query(sql, [email], (err, result) => {
      callback(err, result);
    });
  },
  signupWithoutimg: (username, email, password, callback) => {
    const sql = "INSERT INTO accounts (username,email,password) VALUES (?,?,?)";
    connection.query(sql, [username, email, password], (err, result) => {
      callback(err, result);
    });
  },
  getPasswordByEmail: (email, callback) => {
    const sql = "SELECT password FROM accounts WHERE email = ?;";
    connection.query(sql, [email], (err, result) => {
      callback(err, result);
    });
  },
  getUserNameandImage: (email, callback) => {
    const sql = "SELECT username, image FROM accounts WHERE email = ?;";
    connection.query(sql, [email], (err, result) => {
      callback(err, result);
    });
  },
  getRole: (email, callback) => {
    const sql = "SELECT role FROM accounts WHERE email =?";
    connection.query(sql, [email], (err, result) => {
      callback(err, result);
    });
  },
  signupAdmin: (username, email, password, role, callback) => {
    const sql =
      "INSERT INTO accounts (username,email,password,role) VALUES (?,?,?,?)";
    connection.query(sql, [username, email, password, role], (err, result) => {
      callback(err, result);
    });
  },
};
