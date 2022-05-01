const reviews = require("../database-mysql/models/reviews");
const cloudinary = require("../utils/cloudinary");
var cloudinar = require("cloudinary");
var cloudinar = require("cloudinary").v2;
const jwt = require("jsonwebtoken");
require("dotenv").config();


module.exports = {
  postReview: async function (req, res) {
    const { name, location, description, image } = req.body;
    if (!name || !location || !description || !image) {
      res.send("fill all the field");
    } else {
      jwt.verify(req.token, process.env.JWT_SECRET_KEY, async (err) => {
        if (err) {
          res.send('not authenticated');
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
                      return res.send(" your review matter");
                    }
                  );
                }
              }
            );
          } catch (err) {
            res.send(err);
          }
        }
      });
   
    }
  },
  getReviews: function (req, res) {
   reviews.getReview((err, result)=>{
      if(err){res.send(err)} 
      res.send(result) 
    })
  },
  deleteReview: function (req, res) {
    const id = req.params.id;
    jwt.verify(req.token, process.env.JWT_SECRET_KEY, async (err) => {
      if (err) {
        res.send('not authenticated');
      } else {
        reviews.deleteitem(id, (err, result) => {
          if (err) {
            return res.send(err);
          }
          res.send("review deleted successfully");
        });
      }
    });

  },
  updateReview: async function (req, res) {
    const id = req.params.id;
    const { name, location,description, image} = req.body;
    if (!name || !location || !description || !image) {
      return res.send("fill all the field");
    } else {
      jwt.verify(req.token, process.env.JWT_SECRET_KEY, async (err) => {
        if (err) {
          res.send('not authenticated');
        } else {
          const response = await cloudinar.uploader.upload(
            image,
            async function (error, result) {
              if (error) {
                res.send(error);
              }
              const image = result.secure_url;
              reviews.updatereviews(
                id,
                name,
                location,
                description,
                image,
                (err, result) => {
                  if (err) {
                    res.send(err);
                  }
                  res.send("items updated successfully");
                }
              );
            }
          );
        }
      });

    }
  },

  verify: function (req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      req.token = bearerToken;
      next();
    } else {
      res.send(403);
    }
  },
};
