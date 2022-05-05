const express = require("express");
const router = express.Router();

const { payitem ,verify} = require("../controllers/stripe");

router.post("/payitem",verify, payitem);

module.exports = router;
