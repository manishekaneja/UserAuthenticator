const collection = require('./database.js');
const getDB = {
    'add': function (obj, res, logger) {
        logger.debug("Trying to add the Data to the Database =>add Function");
        new collection({ 'name': obj.name, 'username': obj.username, 'password': obj.password, 'email': obj.email }).save(function () {
            logger.debug("Directed to Login Page => Status:307");
            res.redirect(307, "/login");
        })
    },
    'search': function (username, res, logger) {
        logger.debug("Trying to read the Data from the Database =>search Function");
        collection.findOne({ 'username': username }, function (error, obj) {
            if (error) {
                logger.error("Something happened at Database Level");
                throw error;
            }
            res.send({ 'data': JSON.stringify(obj) });
        });
    },
    'isValid': function (req, res, logger) {
        logger.debug("Trying to read the Data from the Database =>isValid Function");
        collection.findOne({ 'username': req.body.username }, function (error, obj) {
            if (error) {
                logger.error("Something happened at Database Level");
                throw error;
            }
            if (obj) {
                logger.debug("Checking the object");
                if (obj.password == req.body.password) {
                    req.session.data = obj;
                    logger.debug("Sending to Dashboard");
                    res.redirect("/");
                }
                else {
                    res.redirect("/login");
                }
            } else {
                res.redirect("/login");
            }
        });
    },
    'addMyMessage': function (username, mess, res, logger) {
        logger.debug("Searching for User => Add My Message");
        collection.findOneAndUpdate({ 'username': username }, { $push: { 'messages': mess } }, function (error, obj) {
            console.log(obj.messages);
            logger.debug("Done");
            res.send(true);
        });
    },
    'sendMessage': function (username, res, logger) {
        logger.debug("Searchin the User =>send Message");
        collection.findOne({ 'username': username }, function (error, obj) {
            if (error)
                throw error;
            if (obj != undefined) {
                res.render("./message/message.ejs", {
                    "user": username
                })
            }
            else {
                res.redirect('./error');
            }
        });


    },
    'addSession': function (req, logger) {
        collection.findOneAndUpdate({ 'username': req.body.username }, { $push: { 'sessionID': req.sessionID } }, function (error, obj) {
            if (error)
                throw error;

            req.session.data = obj;

        })
    },
    'searchSessionID': function (req,res) {
        collection.findOne({ 'sessionID': req.sessionID }, function (error, obj) {
            if (error)
                throw error;
                if(obj){
            req.session.data = obj;
            console.log(req.session.data);
            
            res.render("./index.ejs", {
                "data":req.session.data
            });
        }else{
            res.redirect('./login');
        }
        })
    }

}
module.exports = getDB;