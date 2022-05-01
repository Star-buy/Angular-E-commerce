const items = require("../database-mysql/models/items");
const bcrypt = require("bcrypt");
const cloudinary = require("../utils/cloudinary");
var cloudinar = require("cloudinary");
var cloudinar = require("cloudinary").v2;
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  postItem: async function (req, res) {
    console.log(req.body);
    const { title, description,  price, gender, discount } = req.body;
    const image = "https://res.cloudinary.com/dm6yw4dn0/image/upload/v1651285239/yxyzbdtptgrl1em8zy6z.jpg";
  


    if (!title || !description || !price || !gender) {
    const { title, description, image, price, gender, discount ,stock} = req.body;
    if (!title || !description || !image || !price || !gender || !stock) {
      res.send("please fill all the fields");

    }
    else if (discount) {
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
                }
                const url = result.secure_url;
                items.postItemwithdisc(
                  title,
                  description,
                  url,
                  price,
                  discount,
                  gender,
                  stock,
                  async (err, result) => {
                    if (err) {
                      res.send(err);
                    }
                    res.send("items added successfully");
                  }
                );
              }
            );
          } catch (err) {
            res.send(err);
          }
        }
      });
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
                }
                const url = result.secure_url;
                items.postItemwithoutdisc(
                  title,
                  description,
                  url,
                  price,
                  gender,
                  stock,
                  async (err, result) => {
                    if (err) {
                      res.send(err);
                    }
                    res.send("items added successfully");
                  }
                );
              }
            );
          } catch (err) {
            res.send(err);
          }
        }
      });
     
    }
  },
  getItems: function (req, res) {
    items.getItem((err, result) => {
      if (err) {
        return res.send(err);
      }
      res.send(result);
    });
  },
  deleteItem: function (req, res) {
    const id = req.params.id;
    jwt.verify(req.token, process.env.JWT_SECRET_KEY, async (err) => {
      if (err) {
        res.send('not authenticated');
      } else {
        items.deleteitem(id, (err, result) => {
          if (err) {
            return res.send(err);
          }
          res.send("item deleted successfully");
        });       
      }
    });

  },
  updateItem: async function (req, res) {
    const id = req.params.id;
    const { title, description, image, price, gender, discount ,stock} = req.body;
    if (!title || !description || !image || !price || !gender || !stock) {
      res.send("please fill all the fields");
    }
    if (discount) {
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
                }
                const image = result.secure_url;
                items.updateitem(
                  id,
                  title,
                  description,
                  image,
                  price,
                  discount,
                  gender,
                  stock,
                  async (err, result) => {
                    if (err) {
                      res.send(err);
                    }
                    res.send("items updated successfully");
                  }
                );
              }
            );
          } catch (err) {
            res.send(err);
          }
        }
      });
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
                }
                const image = result.secure_url;
                items.updateitemwithoutdisc(
                  id,
                  title,
                  description,
                  image,
                  price,
                  gender,
                  stock,
                  async (err, result) => {
                    if (err) {
                      res.send(err);
                    }
                    res.send("items updated successfully");
                  }
                );
              }
            );
          } catch (err) {
            res.send(err);
          }
        }
      });
     
    }
  },
  getMan: function (req, res) {
    items.getman((err, result) => {
      if (err) {
        return res.send(err);
      }
      res.send(result);
    });
  },
  getKids: function (req, res) {
    items.getkids((err, result) => {
      if (err) {
        return res.send(err);
      }
      res.send(result);
    });
  },
  getFemale: function (req, res) {
    items.getfemale((err, result) => {
      if (err) {
        return res.send(err);
      }
      res.send(result);
    });
  },
  verify: function (req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      req.token = bearerToken;
      next();
    } else {
      res.send("lool");
    }
  },
};
