const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const database= require('../db/dboper.js');
const app = express();
const log4js = require('log4js');
const logger = log4js.getLogger('cheese');



// const list = require("../model/list.js");
// const obj = require("../model/object.js");
 const router = express.Router();

router.get("/", function (req, res) {
    logger.debug("Login Panel is Active =>using Get Request ")
    res.sendFile(path.normalize(__dirname+"/../public/login/login.html"));
})
router.post("/", function (req, res) {
    logger.debug("Login Panel is Active =>using Post Request ");
    req.session.username=req.body.username;
    req.session.password=req.body.password;
    console.log(req.body);
    console.log(req.session);    
   database.isValid(req,res,logger);

   
});
module.exports = router;