const express = require("express");
const router = express.Router();

const { postReview,getReviews,deleteReview,updateReview ,verify} = require("../controllers/reviews");

router.post("/postreview",verify, postReview);
router.get("/getreview", getReviews);
router.delete('/deletereview/:id',verify, deleteReview);
router.put('/updatereview/:id',verify, updateReview);
module.exports = router;
