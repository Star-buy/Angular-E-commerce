const Review = require("../DataBase-mongo/models/review.js");
const router = require("express").Router();
const cloudinary = require("../utils/cloudinary")
const upload = require("../utils/multer")


router.get("/test", (req, res) => {
  Review.find({})
    .then((data) => {
      console.log("GETTING FROM THE DATA SUCCESSFULY");
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}); //Tested


router.post('/test', upload.single("image"), async (req,res) => {
   try{
   const image=req.body.image
   const result = await cloudinary.uploader.upload(image);
   //create instance of user review
   let user = new Review({
    name: req.body.name,
    location: req.body.location,
    description: req.body.description,
    image: result.secure_url,
    cloudinary_id: result.public_id,
   });
   await user.save();
   res.json(user);
   } catch(err) {
   console.log(err )
   }
}) //tested

router.delete("/delete/:id", (req, res) => {
  let id = req.params.id;
  Review.findOneAndRemove(id)
    .then(() => {
      res.send("Sucsees with delete");
    })
    .catch((err) => {
      res.send(err);
    });
}); //Tested
module.exports = router;
