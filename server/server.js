const path=require('path');
const express=require('express');

const publicpath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app=express();

console.log(path.join(__dirname,'../public'));

app.use(express.static(publicpath));

app.listen(3000,()=>{
    console.log(`server started on ${port}`);
})