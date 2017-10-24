const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const database= require('../db/dboper.js');
const app = express();


// const list = require("../model/list.js");
// const obj = require("../model/object.js");
 const router = express.Router();

router.get("/", function (req, res) {
    res.sendFile(path.normalize(__dirname+"/../public/login/login.html"));
})
router.post("/", function (req, res) {
    req.session=req.body;    
   database.isValid(req,res);

   
});
module.exports = router;