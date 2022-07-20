// default expess app is set to port 3000
const express = require("express");
const creds = require("./server/databaseConnection");
const app = express();
app.use(express.json());
const port = 3000;

// READ ALL ANIME DATA
app.get("/", (req, res) => {
    console.log(creds);
    creds.query("SELECT * FROM Person", (err, result) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.json(result.rows);
        }
    });
});

app.post("/add_person", (req, res) => {
    console.log(req.body);
    creds.query("INSERT INTO Person (first_name, last_name) VALUES ($1, $2)", [req.body.first_name, req.body.last_name], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
});

app.post("/update_person", (req, res) => {
    creds.query("UPDATE Person SET first_name = $1, last_name = $2 WHERE id = $3", [req.body.first_name, req.body.last_name, req.body.id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
});

app.post("/delete_person", (req, res) => {
    creds.query("DELETE FROM Person WHERE id = $1", [req.body.id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
