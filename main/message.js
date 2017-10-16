const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const ejs = require("ejs");


const list = require("../model/list.js");
const obj = require("../model/object.js");
const router = express.Router();

router.get("/", function (req, res) {
    if (list.userlist.filter((ele) => ele.username == req.query.user).length > 0) {
        res.render("./message/message.ejs", {
            "user": req.query.user
        });
    } else {
        res.redirect("/error");
    }
})
router.post("/", function (req, res) {
    list.userlist.filter((ele) => ele.username == req.body.user)[0].addMessage(req.body.message);
    console.log(JSON.stringify(list));
    // res.send(true);
})

module.exports = router;