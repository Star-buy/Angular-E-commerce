require("dotenv").config();
const router = require("express").Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
// Setup Stripe

const stripe = require("stripe")(process.env.STRIPE_API_SECRET_KEY);

const items = require("../database-mysql/models/items");
const bcrypt = require("bcrypt");
const cloudinary = require("../utils/cloudinary");
var cloudinar = require("cloudinary");
var cloudinar = require("cloudinary").v2;
require("dotenv").config();

module.exports = {
  payitem: async (req, res) => {
    const { title, quantity, image, price } = req.body;
    if (!title || !quantity || !image || !price) {
      res.status(500).send("fill all the field");
    } else {
      jwt.verify(req.token, process.env.JWT_SECRET_KEY, async (err) => {
        if (err) {
          res.send('not authenticated');
        } else {
          const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
              {
                price_data: {
                  currency: "eur",
                  product_data: {
                    name: title,
                    images: [image],
                  },
                  unit_amount: price * 100,
                },
                quantity: quantity,
              },
            ],
         
            mode: "payment",
            success_url: "http://localhost:3000",
            cancel_url: "http://localhost:3000",
          });
          res.send(session);
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
      res.sendStatus(403);
    }
  },
};


