const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const ejs = require("ejs");
const log4js = require('log4js');
const logger = log4js.getLogger('cheese');


const database = require('../db/dboper.js');


// const list = require("../model/list.js");
// const obj = require("../model/object.js");
const router = express.Router();

router.get("/", function (req, res) {
    // console.log(list);
    logger.debug("Trying to identify the User asked =>Using Get Request");
    try {
        logger.debug("Inside try section")
        database.sendMessage(req.query.user,res,logger);
    }
    catch (e) {
        res.redirect("/error");

    }
})
router.post("/", function (req, res) {
    res.redirect("/message?user=" + req.body.username);

})

router.post("/addmessage", function (req, res) {
    try{
    list.userlist.filter((ele) => ele.username == req.body.user)[0].addMessage(req.body.message);
    console.log(JSON.stringify(list));
    res.send(true);}
    catch(e){
        res.send(false);        
    }
})

module.exports = router;