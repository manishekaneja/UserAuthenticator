const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
// const list = require("../model/list.js");
// const obj = require("../model/object.js");
const router = express.Router();

router.get("/", function (req, res) {
        console.log("KKOO "+req.sessionID);
        console.log(req.session);
        if(req.session.username||req.session.emailID){
            res.render("./index.ejs",{
                "data":{
                    "username":req.session.username,
                    "messages":["asd",'asdasdasd']
                    //list.isPresent(req.body.username).messages
                }
            })
            // res.send("u can ");
        }
        else{
            console.log("ok")
            console.log("Inside Dashboard33");
            
        res.redirect("/login");
        // res.send("AND U WILL");
 } });
router.post("/", function (req, res) {
    console.log("Inside Dashboard");
    console.log(req.body)
    if(Object.getOwnPropertyNames(req.body).length === 0){
        console.log("ok")
        res.redirect("/login");
    }
    else{
        req.session=req.body;
        data.addSession(req.session)
    res.render("./index.ejs",{
        "data":{
            "username":req.body.username,
            "messages":["asd",'asdasd','asdasdasd']
            //list.isPresent(req.body.username).messages
        }
    });
}});
module.exports = router;