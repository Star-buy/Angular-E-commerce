const express = require("express");
const router = express.Router();

// Require controller modules.
const {
  postItem,
  getItems,
  deleteItem,
  updateItem,
  getMan,
  getKids,
  getFemale,
} = require("../controllers/items");

/// USERS ROUTES ///

router.post("/postitem", postItem);
router.get("/getitem", getItems);
router.delete("/deleteitem/:id", deleteItem);
router.put("/updateitem/:id", updateItem);
router.get("/getman", getMan);
router.get("/getkids", getKids);
router.get("/getfemale", getFemale);
module.exports = router;
