var Object = require('./object.js');
var list = {
    userlist: [],
    addUser: function (username,password) {
        if (this.userlist.filter((ele) => ele.username==username).length > 0) {
            console.log("ALREADY");
            return true;
        }
        else {
            this.userlist.push(new Object(username,password));
            console.log("WERW");
            return true;
        }
    }
}
module.exports = list;