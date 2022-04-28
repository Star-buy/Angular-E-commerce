const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
   name:String,
   location:String,
   description:String,
   image:String,
   cloudinary_id :{
     type:String,
   }
  });
  
const Review = mongoose.model("Test", reviewSchema);
  
module.exports = Review;