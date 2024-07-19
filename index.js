//import the express module
//* express is a package in node
const express = require('express');

// now going to create a express server
//Steps

// 1- Define the port number the server will listen on :-
const PORT=3000;
// 2- create an instance for express server :-
const app=express();
// 3- start the server and listen the specified port :-
app.listen(PORT,"0.0.0.0",function(){
    //print the server log number
    console.log(`server is running on ${PORT}`);
})

app.get("/hello",(req,res)=>{
res.send({"name":"hunais","Designation":"Flutter Developer"});
}
    
);