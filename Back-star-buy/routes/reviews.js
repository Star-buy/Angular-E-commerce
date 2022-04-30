const express = require("express");
const router = express.Router();

const { postReview,getReviews,deleteReview,updateReview} = require("../controllers/reviews");

router.post("/postreview", postReview);
router.get("/getreview", getReviews);
router.delete('/deletereview/:id', deleteReview);
router.put('/updatereview/:id', updateReview);
module.exports = router;
