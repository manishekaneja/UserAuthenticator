const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const ejs = require("ejs");
const list = require("./model/list.js");
const obj = require("./model/object.js");
const database = require('./db/dboper.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen("3000", function () {
    console.log("Server Running at : 3000");
})

app.set('views', path.normalize(__dirname + '/public'));
//=====================================================
app.use('/login', require('./main/login.js'));
//=====================================================
app.use('/', require('./main/dashboard.js'));
//=====================================================
app.use('/message', require('./main/message.js'));

//For ERROR Pages
//=====================================================
app.get("/error", function (req, res) {
    res.sendFile(__dirname + "/public/error/error.html");
})
app.get("/register", function (req, res) {
    res.sendFile(__dirname + "/public/login/create.html");
})
app.post("/register", function (req, res) {
    console.log(req.body);
    try {
        console.log("here");
       database.add(req.body);
        console.log('saved0');
        list.addUser(req.body.name, req.body.username, req.body.password, req.body.email);        
        console.log('sending');
        res.redirect(307, "/login");
    }
    catch (e) {

        
        console.log(t);
        console.log('oopssss');
        res.redirect('/register');
    }
})
