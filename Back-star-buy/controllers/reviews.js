const reviews = require("../database-mysql/models/reviews");
const cloudinary = require("../utils/cloudinary");
var cloudinar = require("cloudinary");
var cloudinar = require("cloudinary").v2;
require("dotenv").config();

module.exports = {
  postReview: async function (req, res) {
    const { name, location, description, image } = req.body;
    if (!name || !location || !description || !image) {
      res.status(500).send("fill all the field");
    } else {
      try {
        const response = await cloudinar.uploader.upload(
          image,
          async function (error, result) {
            if (error) {
              res.send(error);
            } else {
              const url = result.secure_url;
              reviews.postReview(
                name,
                location,
                description,
                url,
                async (err, result) => {
                  if (err) {
                    res.send(err);
                  }
                  return res.status(200).send(" your review matter");
                }
              );
            }
          }
        );
      } catch (err) {
        res.send(err);
      }
    }
  },
};
