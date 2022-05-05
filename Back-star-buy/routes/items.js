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
  verify,
  getItemsById
} = require("../controllers/items");

/// USERS ROUTES ///

router.post("/postitem",verify, postItem);
router.get("/getitem", getItems);
router.delete("/deleteitem/:id",verify, deleteItem);
router.get("/updateitem/:id",verify, updateItem);
router.get("/getOneItem/:id",getItemsById);
router.get("/getmale", getMan);
router.get("/getkids", getKids);
router.get("/getfemale", getFemale);
module.exports = router;
