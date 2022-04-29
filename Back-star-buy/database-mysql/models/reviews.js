const connection = require("../index");

module.exports = {
  postReview: (name, location, description, image, callback) => {
    const sql =
      "INSERT INTO reviews (name,location,description,image) VALUES (?,?,?,?)";
    connection.query(
      sql,
      [name, location, description, image],
      (err, result) => {
        callback(err, result);
      }
    );
  },
  getReview: (callback) => {
    const sql = "SELECT * FROM reviews "
    connection.query(sql,(err, result)=>{
      callback(err, result);
    })
  },
  deleteitem: (id, callback) => {
    const sql = "DELETE FROM reviews WHERE id = ?;";
    connection.query(sql, id, (err, result) => {
      callback(err, result);
    });
  },
  updateitem: (
    id,
    name,
    location,
    description,
    image,
    callback
  ) => {
    const sql =
      "UPDATE items SET name = ? , location = ?, description = ?, price = ?,discount=?, gender = ? WHERE id = ?;";
    connection.query(
      sql,
      [title, description, image, price, discount, gender, id],
      (err, result) => {
        callback(err, result);
      }
    );
  },
};
