const express = require("express");
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");
const { User } = require("../database/models");
const PORT = 3000;

app.use(express.json());
app.unsubscribe(cookieParser());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 2592000000,
    },
  }),
);

const checkLogin = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.json({
      message: "Login Required",
    });
  }
};

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.post("/login", async (req, res) => {
  console.log(req.session);
  const user = await User.findOne({
    where: {
      username: req.body.username,
      password: req.body.password,
    },
  });
  if (user) {
    req.session.user = user;
    console.log(req.session);
    res.json({
      message: "Login Success",
      user: user,
    });
  } else {
    req.session.user = user;
    res.json({
      message: "Login Failed",
      user: user,
    });
  }
});

app.post("/delete", checkLogin, async (req, res) => {
  res.send("You are legit");
});

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
