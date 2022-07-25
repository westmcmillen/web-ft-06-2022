const express = require("express");
app = express();
const { User } = require("../database/models/");
const bcrypt = require("bcrypt");
const user = require("../database/models/user.js");
const PORT = 3000;

app.use(express.json());

// Create
app.post("/create_user", async (req, res) => {
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

// Read
app.post("/login", async (req, res) => {
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

// Update
app.put("/update", async (req, res) => {
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

// Delete
app.delete("/delete_user", async (req, res) => {
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

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
