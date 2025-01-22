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

// register section
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get('/register', (req, res) => {
    res.render('views/register')
})

// insert values to users table
app.post('/users',(req,res)=>{
    console.log(req.body);

    const sql = "insert into users (name,address,email,password) values ('"+req.body.txtname+"','"+req.body.txtaddress+"','"+req.body.txtemail+"','"+req.body.txtpwd+"')";

    db.query(sql,function(err){
        if(err){
            throw err;
        }else{
            res.send('User registered');
        }
    });
});

app.listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
});
