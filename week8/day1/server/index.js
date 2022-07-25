const express = require("express");
app = express();
const cors = require("cors");
const es6Renderer = require("express-es6-template-engine");
const userRoutes = require("./user/index.js");
const restaurantRoutes = require("./restaurant/index.js");
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

app.get("/", (req, res) => {
  res.render("index");
});

app.use(express.json());
app.use("/users", userRoutes);
app.use("/restaurants", restaurantRoutes);

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
