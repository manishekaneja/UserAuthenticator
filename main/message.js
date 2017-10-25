const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const ejs = require("ejs");
const log4js = require('log4js');
const logger = log4js.getLogger('cheese');
const database = require('../db/dboper.js');
const router = express.Router();

router.get("/", function (req, res) {
    logger.debug("Trying to identify the User asked =>Using Get Request");
    try {
        database.sendMessage(req.query.user, res, logger);
    }
    catch (e) {
        res.redirect("/error");
    }
})
router.post("/", function (req, res) {
    res.redirect("/message?user=" + req.body.username);
})
router.post("/addmessage", function (req, res) {
    try {
        database.addMyMessage(req.body.user, req.body.message, res, logger);
    } catch (e) {
        logger.error("ERROR =>"+e);
        res.send(false);
    }
})

module.exports = router;