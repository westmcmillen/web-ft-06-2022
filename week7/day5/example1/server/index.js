const express = require("express");
const { User, Longboard, Order } = require("../database/models");
const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/user", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const userToCreate = {
    firstName,
    lastName,
    email,
    password,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  try {
    const user = await User.create(userToCreate);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("/longboard", async (req, res) => {
  const { name, brand, length } = req.body;
  const longboardToCreate = {
    name,
    brand,
    length,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  try {
    const longboard = await Longboard.create(longboardToCreate);
    res.status(200).send(longboard);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("/order", async (req, res) => {
  const { userId, longboardId, price } = req.body;
  const orderToCreate = {
    userId,
    longboardId,
    price,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  try {
    const order = await Order.create(orderToCreate);
    res.status(200).send(order);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
