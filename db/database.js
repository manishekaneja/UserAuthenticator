const config={
    'dbURL':'mongodb://localhost:27017/testing'
}
try{
    
const mongoose=require('mongoose');
mongoose.connect(config.dbURL);
console.log("DATABASE Connection created");
const schema=mongoose.Schema;
var dataSchema=new schema({name:String,username:String,email:String,password:String,messages:[{type:String}]})
var tt=mongoose.model("tt",dataSchema);
console.log("Done");
}
catch(e){
    console.log('FAILED');
}
module.exports=tt;