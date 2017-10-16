class Object {
    constructor(name,password) {
        this.username = name;
        this.password= password;
        this.messages = [];
    }
    addMessage(message) {
        this.messages.push(message);
    }
}
module.exports = Object;