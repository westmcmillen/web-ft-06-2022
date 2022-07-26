const express = require("express");
const app = express();
const cors = require("cors");
const petsRoutes = require("./routes/pets");
const es6Renderer = require("express-es6-template-engine");
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/pets", petsRoutes);

app.use(express.static("public"));
app.engine("html", es6Renderer);
app.set("views", "./public/views");
app.set("view engine", "html");

app.listen(PORT, console.log(`Serving is running on port ${PORT}`));
