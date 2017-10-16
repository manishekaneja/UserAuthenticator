const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();


const list = require("../model/list.js");
const obj = require("../model/object.js");
 const router = express.Router();

router.get("/", function (req, res) {
            console.log("ok")
        res.redirect("/login");
    });


router.post("/", function (req, res) {
    console.log(req.body)
    if(Object.getOwnPropertyNames(req.body).length === 0){
        console.log("ok")
        res.redirect("/login");
    }
    else{
    res.render("./index.ejs",{
        "data":{
            "username":req.body.username,
            "messages":["YESSS","OKK","asdasdas"]
        }
    });
    // list.addUser(req.body.username,req.body.password);
    // res.redirect("/message?user="+req.body.username);
}});


module.exports = router;