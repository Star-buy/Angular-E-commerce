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
    stock,
    callback
  ) => {
    const sql =
      "INSERT INTO items (title,description,image,price,discount,gender,stock) VALUES (?,?,?,?,?,?,?)";
    connection.query(
      sql,
      [title, description, image, price, discount, gender,stock],
      (err, result) => {
        callback(err, result);
      }
    );
  },
  postItemwithoutdisc: (title, description, image, price, gender,stock, callback) => {
    const sql =
      "INSERT INTO items (title,description,image,price,gender,stock) VALUES (?,?,?,?,?,?)";
    connection.query(
      sql,
      [title, description, image, price, gender,stock],
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
  getItemById: (id, callback) => {
    const sql = " SELECT * FROM items WHERE id = ?; ";
    connection.query(sql,id, (err, result) => {
      callback(err, result);
      console.log(result);
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
    stock,
    callback
  ) => {
    const sql =
      "UPDATE items SET title = ? , description = ?, image = ?, price = ? , discount = ?, gender = ? , stock = ? WHERE id = ?;"
    connection.query(
      sql,
      [title, description, image, price, discount, gender,stock, id],
      (err, result) => {
        callback(err, result);
      }
    );
  },
  updateitemwithoutdisc: (
    id,
    title,
    description,
    image,
    price,
    gender,
    stock,
    callback
  ) => {
    const sql =
      "UPDATE items SET title = ? , description = ?, image = ?, price = ?, gender = ? ,stock = ? WHERE id = ?;";
    connection.query(
      sql,
      [title, description, image, price, gender,stock, id],
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
