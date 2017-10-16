const express=require('express');
const path=require('path');
const bodyParser= require('body-parser');
const app= express();
const ejs=require("ejs");


const list=require("../model/list.js");
const obj=require("../model/object.js");const router = express.Router();

router.get("/",function(req,res){
    list.addUser("oka");
    // console.log(list);
    var b=list.userlist.filter((ele)=>ele.name==req.query.user);
    // console.log(b+" vv");
    if(b.length>0){
        // res.sendFile(path.normalize(__dirname+"/public/index.html"));
           res.render("./message/message.ejs",{"user":req.query.user});
    }
    else{
        res.sendFile(path.normalize(__dirname+"/../public/error/error.html"));
    }
})
router.post("/",function(req,res){
   var t=list.userlist.filter((ele)=>ele.name==req.body.user);
    t[0].addMessage(req.body.message);
   console.log(JSON.stringify(t));
   res.redirect("/message?user="+req.body.user);
})


module.exports=router;