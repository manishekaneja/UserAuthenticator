class Object{
    constructor(name){
        this.name=name;
        this.messages=[];
    }
    addMessage(message){
        this.messages.push(message);
    }
}
module.exports=Object;