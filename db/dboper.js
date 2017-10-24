const collection = require('./database.js');
const getDB = {
    'add': function (obj) {
        var t = new collection({ 'name': obj.name, 'username': obj.username, 'password': obj.password, 'email': obj.email })
        t.save(function () {
            console.log("ADDDDDDDEDDDDD");
        })
    },
    'search': function (email, res) {
        collection.findOne({ 'email': 'A' }, function (error, obj) {
            if (error)
                throw error;
            res.send({ 'data': JSON.stringify(obj) });
        });

    },
    'isValid': function (req,res) {
        collection.findOne({ 'email': req.session.email }, function (error, obj) {

            console.log('ko');
            if (error)
                throw error;
            if (obj) {
                console.log("TKT");
                console.log(obj);
                if (obj.password == password) {
                    // obj.sessionID=req.sessionID;                    
                    console.log('yes');
                    console.log(obj);
                    res.redirect("/");   
                }
                else {
                    res.redirect("/login");
                }
            } else {
                res.redirect("/login");
            }
            res.redirect("/login");
            
        });
    }

}
module.exports = getDB;