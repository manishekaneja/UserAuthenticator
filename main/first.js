const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();


const list = require("../model/list.js");
const obj = require("../model/object.js");
 const router = express.Router();

router.get("/", function (req, res) {
    res.sendFile(path.normalize(__dirname + "/../public/index.html"));

})
router.post("/", function (req, res) {
    list.addUser(req.body.username,req.body.password);
    res.redirect("/message?user="+req.body.username);
})


module.exports = router;