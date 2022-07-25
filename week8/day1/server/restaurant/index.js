const express = require("express");
const router = express.Router();
const { Restaurant } = require("../../database/models");

// Create Restaurant
router.post("/create_restaurant", async (req, res) => {
  console.log(req.body);
  const { name, address, reviewScore } = req.body;
  try {
    const createRestaurant = await Restaurant.create({
      name: name,
      address: address,
      reviewScore: reviewScore,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.status(200).send(createRestaurant);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Update Restaurant Name by ID
router.post("/update_name/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const restaurantsToGet = await Restaurant.findOne({
    where: {
      id: id,
    },
  });
  restaurantsToGet.update({
    name: name,
    updatedAt: new Date(),
  });
  res.send(restaurantsToGet);
});

// Update Restaurant Address by ID
router.post("/update_address/", async (req, res) => {
  const { id, address } = req.body;
  const restaurantsToGet = await Restaurant.findOne({
    where: {
      id: id,
    },
  });
  restaurantsToGet.update({
    address: address,
    updatedAt: new Date(),
  });
  res.send(restaurantsToGet);
});

// Delete Restaurant by ID
router.post("/delete_restaurant_by_id/", async (req, res) => {
  const { id } = req.body;
  const restaurantsToGet = await Restaurant.findOne({
    where: {
      id: id,
    },
  });
  restaurantsToGet.destroy();
  res.send(`${restaurantsToGet.name} was successfully deleted`);
});

// Delete Restaurant by Name
router.post("/delete_restaurant_by_name/", async (req, res) => {
  const { name } = req.body;
  const restaurantsToGet = await Restaurant.findOne({
    where: {
      name: name,
    },
  });
  restaurantsToGet.destroy();
  res.send(`${restaurantsToGet.name} was successfully deleted`);
});

// Find All Restaurants
router.get("/all_restaurants", async (req, res) => {
  const restaurantsToGet = await Restaurant.findAll();
  res.send(restaurantsToGet);
});

// Find Restaurant by ID
router.get("/by_id/:id", async (req, res) => {
  const { id } = req.params;
  const restaurantsToGet = await Restaurant.findAll({
    where: {
      id: id,
    },
  });
  res.send(restaurantsToGet);
});

// Find Restaurant by Name
router.get("/by_name/:name", async (req, res) => {
  const { name } = req.params;
  const restaurantsToGet = await Restaurant.findAll({
    where: {
      name: name,
    },
  });
  res.send(restaurantsToGet);
});

// Find Restaurant by Address
router.get("/by_address/:address", async (req, res) => {
  const { address } = req.params;
  const restaurantsToGet = await Restaurant.findAll({
    where: {
      address: address,
    },
  });
  res.send(restaurantsToGet);
});

module.exports = router;
