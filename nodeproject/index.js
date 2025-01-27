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


var session=require('express-session')
app.use(session({
secret:'secret',
resave:true,
saveUnintialized:true
}))
app.get('/home',(req,res)=>{
if(req.session.loggedin){
console.log(req.session)
res.send('Welcome back.'+req.session.name+'!')
}
else{
res.send('Please login to view this page')
}
res.end()
})
//login users

app.post('/login',(req,res)=>{
var username=req.body.txtname;
var password=req.body.txtpwd;
if(username&&password){
db.query("SELECT * FROM users where name='"+req.body.txtname+"'and password='"+req.body.txtpwd+"'",function(error,results,fields){
if(results.length>0){
req.session.loggedin=true;
req.session.name=username;
if(username=="admin"){
res.redirect('/getusers')
}
else{
res.render('views/viewusers',{data:results})
}
} else {
res.send('Incorrect username and Password!')
}
})
} else {
res.send('Please enter Username and Password')
res.end()
}
})

//getusers
app.get('/getusers',(req,res)=>{
let sql="SELECT * FROM users"

let query=db.query(sql,(err,results)=>{

if(err){
throw err
}
else if(req.session.loggedin){
res.render('views/viewadmin',{data:results})
}
else{
res.send('Please login to view this page')
}
})
})

//edit users
app.get('/edit/:id',(req,res)=>{
    let sql=`SELECT * FROM users where id=${req.params.id}`
    let query=db.query(sql,(err,results)=>{
    if(err){
    throw err
    }
    res.render('views/edit',{data:results})
    })
    
    })
    
    //update user
    app.post('/updateuser/:id',(req,res)=>{
    let id=req.params.id;
    var sql="UPDATE users SET name='"+req.body.txtname+"',address='"+req.body.txtaddress+"',email='"+req.body.txtema
    il+"' where id='"+id+"'"
    let query=db.query(sql, (err)=>{
    if(err){
    throw err
    }
    res.send("User Updated")
    })
    })

    //delete user
app.get('/deleteuser/:id',(req,res)=>{
    let sql=`DELETE FROM users WHERE id=${req.params.id}`
    let query=db.query(sql,(err,results)=>{
    if(err)
    {throw err}
    res.send("user Deleted")
    })
    })

app.listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
});
