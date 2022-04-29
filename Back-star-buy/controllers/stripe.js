require("dotenv").config();
const router = require("express").Router();

// Setup Stripe

const stripe = require("stripe")(process.env.STRIPE_API_SECRET_KEY);





router.post("/pay", async (req, res) => {
  const { title, quantity, image, price } = req.body;
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
    success_url: "http://localhost:5000",
    cancel_url: "http://localhost:5000",
  });
  res.send(session.url);
});

module.exports = router;

const items = require("../database-mysql/models/items");
const bcrypt = require("bcrypt");
const cloudinary = require("../utils/cloudinary");
var cloudinar = require("cloudinary");
var cloudinar = require("cloudinary").v2;
require("dotenv").config();

module.exports = {
  payitem: async function (req, res) {
    const { title, quantity, image, price } = req.body;
    if (!title || !quantity || !image || !price) {
      res.status(500).send("fill all the field");
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
        success_url: "http://localhost:5000",
        cancel_url: "http://localhost:5000",
      });
      res.send(session.url);
    }
  },
};
