const express = require("express");
const app = express();
const session = require("express-session");
const sequelizeStore = require("connect-session-sequelize")(session.Store);
const cookieParser = require("cookie-parser");
const models = require("../database/models");
const { User, Session } = require("../database/models");
const PORT = 3000;

const store = new sequelizeStore({
  db: models.sequelize,
});

app.use(express.json());
app.unsubscribe(cookieParser());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: false,
      maxAge: 2592000000,
    },
  }),
);

store.sync();

const checkLogin = async (req, res, next) => {
  const all = await Session.findAll();
  console.log(all);
  res.send("Done");
};

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.post("/login", async (req, res) => {
  const user = await User.findOne({
    where: {
      username: req.body.username,
      password: req.body.password,
    },
  });
  if (user) {
    req.session.user = user;
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
