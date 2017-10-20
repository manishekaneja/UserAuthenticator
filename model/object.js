class Object {
    constructor(name,username,password,email) {
        this.name=name;
        this.username =username;
        this.password= password;
        this.email=email;
        this.messages = [];
    }
    addMessage(message) {
        this.messages.push(message);
    }
    deleteMessage(message){
        this.messages.splice(this.messages.indexOf(message),1);        
    }
}
module.exports = Object;