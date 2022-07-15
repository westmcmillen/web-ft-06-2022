const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/users", (req, res) => {
    res.send([
        {
            name: "John",
            age: 30,
        },
        {
            name: "Jane",
            age: 25,
        },
    ]);
});

app.post("/create_user", (req, res) => {
    console.log(req.body.name);
    res.send(req.body.name);
});

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
