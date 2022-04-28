const Promise = require("bluebird");

module.exports = (db) => {
  if (!db.queryAsync) {
    db = Promise.promisifyAll(db);
  }

  // Create a table
  return [
    db
      .queryAsync(
        `
    CREATE TABLE IF NOT EXISTS accounts (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL, 
      image VARCHAR(255) ,
      password VARCHAR(255) NOT NULL,
      role VARCHAR(10) 
    );`
      )
      .error((err) => {
        console.log(err);
      }),
    db
      .queryAsync(
        `
    CREATE TABLE IF NOT EXISTS items (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description VARCHAR(255), 
      image VARCHAR(255) ,
      price int NOT NULL,
      discount int ,
      gender VARCHAR(10) 
    );`
      )
      .error((err) => {
        console.log(err);
      }),
    db
      .queryAsync(
        `
    CREATE TABLE IF NOT EXISTS reviews (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      location VARCHAR(255), 
      description VARCHAR(255) ,
      image VARCHAR(255)
    );`
      )
      .error((err) => {
        console.log(err);
      }),
  ];
};
