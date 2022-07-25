const express = require("express");
const es6Renderer = require("express-es6-template-engine");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.engine("html", es6Renderer);
app.set("views", "../templates");
app.set("view engine", "html");
app.use(express.static("../public"));

app.get("/", (req, res) => {
  res.send("get return");
});

app.post("/", (req, res) => {
  res.send(req.body);
});

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
