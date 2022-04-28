const { postItem,getItem } = require("../database-mysql/index");

const router = require("express").Router();

const cloudinary = require("../utils/cloudinary");
var cloudinar = require("cloudinary");
var cloudinar = require("cloudinary").v2;

router.post("/admin", async (req, res) => {
  const { title, description, image, price } = req.body;
  const response = await cloudinar.uploader.upload(
    image,
    async function (error, result) {
      const image = result.secure_url;
      postItem(title, description, image, price, (err, result) => {
        if (err) {
          res.send(err);
        }
        res.send(result);
      });
    }
  );
});

router.get('/admin',(req, res)=>{
  getItem((err, result) => {
    if(err){return res.send(err)}res.send(result)
  })
})



module.exports = router;
