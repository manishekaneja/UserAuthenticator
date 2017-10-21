const collection = require('./database.js');
const getDB={
    add:function( obj){
        var t = new collection({ 'name': obj.name,'username':obj.username,'password':obj.password,'email':obj.email })
        t.save(function () {
            console.log("ADDDDDDDEDDDDD");
        })
    }
}
module.exports=getDB;