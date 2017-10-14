const express=require('express');
const path=require('path');
const app= express();

app.listen("3000",function(){
    console.log("Server Running at : 3000");
})

app.get("/")