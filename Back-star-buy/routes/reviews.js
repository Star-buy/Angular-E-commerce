const express = require("express");
const router = express.Router();

const { postReview,getReviews } = require("../controllers/reviews");

router.post("/postreview", postReview);
router.get("/getreview", getReviews);

module.exports = router;
