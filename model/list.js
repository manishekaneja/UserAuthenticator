var Object = require('./object.js');
var list = {
    'userlist': [],
    'addUser': function (name, username, password, email) {
        if (this.isPresent(username)) {
            return true;
        }
        else {
            this.userlist.push(new Object(name, username, password, email));
            return true;
        }
    },
    'isPresent': function (username) {
        let result = this.userlist.filter((ele) => ele.username == username);
        if (result.length > 0) {
            return result[0];
        }
        else {
            return null;
        }
    },
    'updatePassword': function (username, password) {
        this.isPresent(username).password = password;
    },
    'isValid': function (username, password) {
        var object = this.isPresent(username);
        if (object && object.password == password) {
            return true;
        }
        else {
            return false;
        }
    }
}
module.exports = list;