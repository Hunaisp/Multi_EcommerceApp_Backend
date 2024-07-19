const express = require('express');

const helloRoute= express.Router();
//first api
helloRoute.get('/hello',(req,res)=>{
   res.send({"name":"hunais"});
});
//second api
helloRoute.get('/hi',(req,res)=>{
    res.send({"name":"ali"});
});
module.exports = helloRoute