const items = require("../database-mysql/models/items");
const bcrypt = require("bcrypt");
const cloudinary = require("../utils/cloudinary");
var cloudinar = require("cloudinary");
var cloudinar = require("cloudinary").v2;
require("dotenv").config();

module.exports = {
  postItem: async function (req, res) {
    const { title, description, image, price, gender, discount } = req.body;
    if (!title || !description || !image || !price || !gender) {
      res.status(404).send("please fill all the fields");
    }
    if (discount) {
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
        res.status(500).send(err);
      }
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
    items.deleteitem(id, (err, result) => {
      if (err) {
        return res.send(err);
      }
      res.send("item deleted successfully");
    });
  },
  updateItem: async function (req, res) {
    const id = req.params.id;
    const { title, description, image, price, discount, gender } = req.body;
    if (!title || !description || !image || !price) {
      return res.status(500).send("fill all the field");
    } else {
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
};
