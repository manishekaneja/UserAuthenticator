const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const session = require('express-session');
const cookie = require('cookie-parser');
const ejs = require("ejs");
const log4js = require('log4js');
//===========================================================================================================
log4js.configure({
    appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
  });

const logger = log4js.getLogger('cheese');
logger.level = 'debug';
logger.debug("=================================================================Lets Start");


// const list = require("./model/list.js");
// const obj = require("./model/object.js");
const database = require('./db/dboper.js');
//===========================================================================================================

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: 'can u'
    ,

    cookie: {
        secure: false,
        maxAge: 6000 * 6
    }
}
));
app.use(cookie());


app.listen("3000", function () {
    console.log("Server Running at : 3000");
})
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public/ang'));
// app.set('views', path.normalize(__dirname + '/public/ang/'));
console.log("OK")
//=====================================================
app.use('/login', require('./main/login.js'));
//=====================================================
app.use('/', require('./main/dashboard.js'));
//=====================================================
app.use('/message', require('./main/message.js'));

//For ERROR Pages
//=====================================================
app.get("/error", function (req, res) {
    logger.error("Directing to the ERROR Page");
    res.sendFile(__dirname + "/public/error/error.html");
})
app.get("/register", function (req, res) {
    logger.debug("Register Page is Active => Using Get Request");
    res.sendFile(__dirname + "/public/login/create.html");
})
app.post("/register", function (req, res) {
    logger.debug("Register Page is Active => Using Post Request");
    try {
        logger.debug("Call to Database Add function");
        database.add(req.body,res,logger);
    }
    catch (e) {
        logger.error("Exeption Occured While Entering registering User in Database");
        res.redirect('/register');
    }
})
app.get('/testing', function (req, res) {
    logger.debug("ONLY FOR TESTING PHASE");
    res.send(database.isValid('A', 'A',logger));
})
