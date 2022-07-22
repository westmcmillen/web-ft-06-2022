const express = require("express");
const { User } = require("../models");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/users", async (req, res) => {
  const users = await User.findAll();
  const id = req.params.id;
  res.send(users);
});

app.get("/user_id/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findByPk(id);
  res.send(user);
});

app.get("/user_name/:name", async (req, res) => {
  const user = await User.findOne({
    where: {
      firstName: "West",
    },
  });
  const id = req.params.id;
  res.send(user);
});

app.listen(PORT, () => {
  console.log(`Server is running port ${PORT}`);
});
