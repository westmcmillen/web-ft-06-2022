const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { User } = require("../../database/models");

// Find All
router.get("/all_users", async (req, res) => {
  const usersToGet = await User.findAll();
  res.send(usersToGet);
});

// Find by ID
router.get("/by_id/:id", async (req, res) => {
  const { id } = req.params;
  const usersToGet = await User.findAll({
    where: {
      id: id,
    },
  });
  res.send(usersToGet);
});

// Create User
router.post("/create_user", async (req, res) => {
  const { username, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(password, salt);
    const encryptedUser = {
      username: username,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const createUser = await User.create(encryptedUser);
    res.status(200).send(createUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const findUser = await User.findOne({
      where: {
        username: username,
      },
    });
    try {
      const validated = await bcrypt.compare(password, findUser.password);
      if (validated) {
        res.status(200).send("Login successfull"); //.redirect("/");
      } else {
        res.status(400).send("Invalid username or password");
      }
    } catch (error) {
      res.status(400).send("Invalid username or password");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

// Update Password
router.put("/update_password", async (req, res) => {
  const { username, password } = req.body;
  try {
    const findUser = await User.findOne({
      where: {
        username: username,
      },
    });
    const salt = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(password, salt);
    findUser.password = hashedPassword;
    findUser.update({
      username: username,
      password: hashedPassword,
      updateAt: new Date(),
    });
    res.status(200).send("Password was successfully updated");
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete User
router.delete("/delete_user", async (req, res) => {
  const { username, password } = req.body;
  try {
    const findUser = await User.findOne({
      where: {
        username: username,
      },
    });
    try {
      const validated = await bcrypt.compare(password, findUser.password);
      if (validated) {
        findUser.destroy();
        res.status(200).send(`${username} was successfully deleted`);
      } else {
        res.status(400).send("Invalid username or password");
      }
    } catch (error) {
      res.status(400).send("Invalid username or password");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
