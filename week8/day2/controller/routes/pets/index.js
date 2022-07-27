const express = require("express");
const router = express.Router();
const { Pet } = require("../../../sequelize/models");

router.get("/get_pets", async (req, res) => {
  const petsToGet = await Pet.findAll();
  res.render("index", {
    locals: {
      title: "Welcome",
      favs: ["Joe", "Joe", "Joe", "Joe", "Joe"],
      pets: petsToGet,
    },
  });
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
