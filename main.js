const express=require('express');
const path=require('path');
const bodyParser= require('body-parser');
const app= express();
const ejs=require("ejs");


const list=require("./model/list.js");
const obj=require("./model/object.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen("3000",function(){
    console.log("Server Running at : 3000");
})

app.set('views',path.normalize(__dirname+'/public'));

app.get("/sendmess",function(req,res){
    res.sendFile(__dirname+"/public/error/error.html");
})
const login=require('./main/message.js');
app.use('/message',login);