const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql");


const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "users",
        password: "mysqltm12supraz"
});
connection.connect(err => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected");
    }
});


app.get("/", (req, res) => {
    connection.query("select * from users limit 10 ", (err, rows, data) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
});



app.listen(port);
