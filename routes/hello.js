const express = require('express');

const helloRoute= express.Router();
//first api
helloRoute.get('/hello',(req,res)=>{
   res.send({"name":"hunais"});
});
module.exports = helloRoute