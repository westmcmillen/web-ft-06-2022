const express = require("express");
const router = express.Router();

router.get("/get_pets", (req, res) => {
  res.render("index");
});

router.post("/create_pet", (req, res) => {
  res.send("create pet");
});

router.put("/update_pet", (req, res) => {
  res.send("update pet");
});

router.delete("/delete_pet", (req, res) => {
  res.send("delete pet");
});

module.exports = router;
