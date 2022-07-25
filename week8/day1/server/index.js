const express = require("express");
app = express();
const bcrypt = require("bcrypt");
const PORT = 3000;

app.use(express.json());

app.post("/create_user", async (req, res) => {
  const { username, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(5);
  } catch (error) {}
  console.log(password);
  res.send(req.body);
});

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
