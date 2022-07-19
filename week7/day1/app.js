import express from "express";
import cowsay from "cowsay";
const app = express();
const PORT = 3000;

app.use(express.json());

console.log(cowsay);

app.get("/", (req, res) => {
    res.send("This is the home page");
});

app.get("/benji", (req, res) => {
    res.send("🦎");
});

app.post("/beer", (req, res) => {
    res.send("🍻");
});

app.post("/create_user", (req, res) => {
    res.send(`Create user ${req.body.discPlayer}`);
});

app.get("/say", (req, res) => {
    res.send(
        cowsay.say({
            text: "I'm a moooodule",
            e: "oO",
            T: "U ",
        }),
    );
});

app.post("/think", (req, res) => {
    res.send(
        cowsay.say({
            text: `${req.body.think}`,
            e: "oO",
            T: "U ",
        }),
    );
});

app.post("/list", (req, res) => {
    res.send(
        cowsay.say({
            text: `${req.body.list}`,
            e: "oO",
            T: "U ",
        }),
    );
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));

// 3 route
// 1 get 2 post
