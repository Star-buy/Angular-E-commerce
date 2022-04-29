const connection = require("../index");

module.exports = {
  //a function which fetches all the users.

  postItemwithdisc: (
    title,
    description,
    image,
    price,
    discount,
    gender,
    callback
  ) => {
    const sql =
      "INSERT INTO items (title,description,image,price,discount,gender) VALUES (?,?,?,?,?,?)";
    connection.query(
      sql,
      [title, description, image, price, discount, gender],
      (err, result) => {
        callback(err, result);
      }
    );
  },
  postItemwithoutdisc: (title, description, image, price, gender, callback) => {
    const sql =
      "INSERT INTO items (title,description,image,price,gender) VALUES (?,?,?,?,?)";
    connection.query(
      sql,
      [title, description, image, price, gender],
      (err, result) => {
        callback(err, result);
      }
    );
  },

  getItem: (callback) => {
    const sql = " SELECT * FROM items; ";
    connection.query(sql, (err, result) => {
      callback(err, result);
    });
  },
  deleteitem: (id, callback) => {
    const sql = "DELETE FROM items WHERE id = ?;";
    connection.query(sql, id, (err, result) => {
      callback(err, result);
    });
  },

  updateitem: (
    id,
    title,
    description,
    image,
    price,
    discount,
    gender,
    callback
  ) => {
    const sql =
      "UPDATE items SET title = ? , description = ?, image = ?, price = ?,discount=?, gender = ? WHERE id = ?;";
    connection.query(
      sql,
      [title, description, image, price, discount, gender, id],
      (err, result) => {
        callback(err, result);
      }
    );
  },
  getman: (callback) => {
    const sql = "SELECT * FROM items WHERE gender = 'male' ";
    connection.query(sql, (err, result) => {
      callback(err, result);
    });
  },
  getfemale: (callback) => {
    const sql = "SELECT * FROM items WHERE gender = 'female' ";
    connection.query(sql, (err, result) => {
      callback(err, result);
    });
  },
  getkids: (callback) => {
    const sql = "SELECT * FROM items WHERE gender = 'kids' ";
    connection.query(sql, (err, result) => {
      callback(err, result);
    });
  },
};
