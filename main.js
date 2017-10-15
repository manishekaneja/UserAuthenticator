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

var loc=path.normalize(__dirname+'/public');
app.set('views',loc);

app.get("/",function(req,res){
    list.addUser("oka");
    // console.log(list);
    var b=list.userlist.filter((ele)=>ele.name==req.query.user);
    // console.log(b+" vv");
    if(b.length>0){
        res.sendFile(path.normalize(__dirname+"/public/index.html"));
        //    res.render("./index.html",{"user":req.query.user});
    }
    else{
        res.sendFile(path.normalize(__dirname+"/public/error/error.html"));
    }
})
app.post("/recive",function(req,res){
   var t=list.userlist.filter((ele)=>ele.name==req.body.user);
    t[0].addMessage(req.body.message);
   console.log(JSON.stringify(t));
   
   res.redirect("/?user="+req.body.user);
})
app.get("/sendmess",function(req,res){
    console.log(req.query.message);
    res.redirect("/");
})