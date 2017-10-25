const collection = require('./database.js');
const getDB = {
    'add': function (obj, res, logger) {
        logger.debug("Trying to add the Data to the Database =>add Function");
        var t = new collection({ 'name': obj.name, 'username': obj.username, 'password': obj.password, 'email': obj.email })
        t.save(function () {
            logger.debug("Object saved in database");
            console.log("ADDDDDDDEDDDDD");
            logger.debug("Directed to Login Page => Status:307");
            res.redirect(307, "/login");
        })
    },
    'search': function (email, res, logger) {
        logger.debug("Trying to read the Data from the Database =>search Function");
        collection.findOne({ 'email': 'A' }, function (error, obj) {
            if (error) {
                logger.error("Something happened at Database Level");
                throw error;
            }
            res.send({ 'data': JSON.stringify(obj) });
        });

    },
    'isValid': function (req, res, logger) {
        logger.debug("Trying to read the Data from the Database =>isValid Function");
        collection.findOne({ 'email': req.session.username }, function (error, obj) {
            if (error) {
                logger.error("Something happened at Database Level");
                throw error;

            }
            if (obj) {
                logger.debug("Checking the object");
                if (obj.password == req.session.password) {
                    // obj.sessionID=req.sessionID;                    
                    console.log('yes');
                    console.log(obj);
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
    'sendMessage': function (username, res, logger) {
        logger.debug("Searchin the USer =>send Message");

        collection.findOne({ 'username': username }, function (error, obj) {
            res.render("./message/message.ejs", {
                "user": username
            })

        });


    }

}
module.exports = getDB;