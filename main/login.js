const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const database= require('../db/dboper.js');
const app = express();
const log4js = require('log4js');
const logger = log4js.getLogger('cheese');

 const router = express.Router();

router.get("/", function (req, res) {
    logger.debug("Login Panel is Active =>using Get Request ")
    res.sendFile(path.normalize(__dirname+"/../public/login/login.html"));
})
router.post("/", function (req, res) {
    logger.debug("Login Panel is Active =>using Post Request ");
   database.isValid(req,res,logger);

   
});
module.exports = router;