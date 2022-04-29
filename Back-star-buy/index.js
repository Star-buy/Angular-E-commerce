var express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const port = 3000;
require("dotenv").config();

const usersRoute = require("./routes/users");
const items = require("./routes/items");
const payment = require("./routes/stripe");
const reviews = require("./routes/reviews");

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/../vue-project/dist"));
app.use(fileUpload());
app.use(cors({ origin: "*" }));

app.use("/users", usersRoute);
app.use("/items", items);
app.use("/payment", payment);
app.use("/reviews", reviews);


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
