import express from "express";
import es6Renderer from "express-es6-template-engine";
const app = express();
const PORT = 3000;

app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");
app.use(express.static("public"));

app.get("/", (req, res) => {
    const user = {
        name: "West",
    };
    res.render("home", {
        locals: {
            user: user,
            teacher: "Joe",
            students: ["Amanda", "Carlos"],
        },
    });
});

app.listen(PORT, console.log(`Server is running on ${PORT}`));
