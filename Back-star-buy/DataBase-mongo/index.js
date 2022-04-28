
var mongoose = require("mongoose");
var mongoUri = "mongodb://localhost/test";


mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
  console.log("Connected to dataBase MongoDB");
});
var db = mongoose.connection;

module.exports = db
