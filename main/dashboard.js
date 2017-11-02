const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const log4js = require('log4js');
const logger = log4js.getLogger('cheese');
const router = express.Router();
const database = require('../db/dboper.js');
console.log("koko");

router.get("/", function (req, res) {
    logger.debug("Loading Dashboard Page=> Using Get Request");
    console.log(__dirname);
    res.sendFile(path.normalize(__dirname+"/../public/ang/index.html"));
    
    // if (req.session.data ){

    //     logger.debug("Session data found"+JSON.stringify(req.session.data));
    //     res.render("./index.ejs", {
    //         "data": req.session.data
    //     })
    // } else {
    //     // if (req.sessionID) {
    //     //     logger.debug("Session ID Found");
            
    //     //     database.searchSessionID(req,res);
    //     // } else {
    // console.log(__dirname);            
    //         logger.debug("Nothing Found"+ path.normalize(__dirname));
    //         res.render('/ang/index.html');
    //     // }
    // }
});
router.post("/", function (req, res) {
    logger.debug("Loading Dashboard Page=> Using Post Request")
    if (!req.session.data.username) {
        if (!req.body.username) {
            logger.debug("Back to login from Post");
            res.render("/ang/index.html");
        }
        else {
            database.addSession(req, logger);
            res.render("./index.ejs", {
                "data": {
                    "username": req.session.username,
                    "messages": req.session.messages
                }
            });
        }
    }
});
module.exports = router;