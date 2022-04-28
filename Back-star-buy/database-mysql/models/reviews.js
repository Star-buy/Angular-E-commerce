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
};
