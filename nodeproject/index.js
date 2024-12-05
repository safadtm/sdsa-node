const express = require('express')

const mysql = require('mysql')

const hbs = require('hbs')

const app = express();

var db = mysql.createConnection({

    host: "localhost",

    user: "root",

    password: "", 
    
    database: "nodeproject",
    port: 4306

})

db.connect((err) => {

    if (!err) {

        console.log("Connected")

    }

    else {

        console.log("Connection Failed")
    }
}
)