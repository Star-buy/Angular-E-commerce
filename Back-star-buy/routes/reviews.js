const express = require("express");
const router = express.Router();

const { postReview } = require("../controllers/reviews");

router.post("/postreview", postReview);

module.exports = router;
