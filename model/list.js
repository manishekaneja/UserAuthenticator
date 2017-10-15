var Object= require('./object.js');
var list={
    userlist:[],
    addUser:function(username){
        if(this.userlist.filter((ele)=>ele.name==username).length>0){
            return "Already Exist in List";
        }
        else{
        this.userlist.push(new Object(username));
        this.userlist[0].addMessage("succ");
        console.log(this.userlist[0]);
    }}
}
module.exports=list;