const express = require('express');

const mysql = require('mysql');

const hbs = require('hbs');

const path = require('path');

const app = express();

var db = mysql.createConnection({

    host: "localhost",

    user: "root",

    password: "",

    database: "nodeproject",
    port: 4306

});

db.connect((err) => {

    if (!err) {

        console.log("Connected")

    }

    else {

        console.log("Connection Failed")
    }
}
);



//connect viewengine
app.set('views', path.join(__dirname));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('views/firstpage')
});

app.listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
});
