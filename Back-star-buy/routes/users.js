const express = require("express");
const router = express.Router();
require("dotenv").config();

// Require controller modules.
const {
  getAllUsers,
  addUser,
  loginUser,
  signupAdmin,
  getRole,
} = require("../controllers/users");

/// USERS ROUTES ///
router.get("/getAll", getAllUsers);
router.post("/getrole", getRole);
router.post("/signup", addUser);
router.post("/login", loginUser);
router.post("/signupAdmin", signupAdmin);

module.exports = router;
