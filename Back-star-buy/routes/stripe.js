const express = require("express");
const router = express.Router();

const { payitem } = require("../controllers/stripe");

router.post("/payitem", payitem);

module.exports = router;
