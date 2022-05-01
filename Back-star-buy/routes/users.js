const express = require("express");
const router = express.Router();
require("dotenv").config();

// Require controller modules.
const {
  getOneUser,
  signupUser,
  loginUser,
  signupAdmin,
  getRole,
  
} = require("../controllers/users");

/// USERS ROUTES ///

router.post("/getone", getOneUser);
router.post("/getrole", getRole);
router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/signupAdmin", signupAdmin);

module.exports = router;
