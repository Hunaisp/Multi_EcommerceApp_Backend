const express = require('express');
const User = require('../models/user');
//import password hash package :-
const bcrypt=require("bcryptjs");
const authRouter=express.Router();
//import jsonwebtoken package:
const jwt=require("jsonwebtoken");
//creating signup api :-

authRouter.post('/api/signup',async(req,res)=>{
try {
    //extract username ,email and password from the request :-
  const {fullName,email,password} = req.body;
  const existingEmail = await User.findOne({email});
  if(existingEmail){
    //if user enterd email is already exist in the database return statusCode 400 and send the error message
    return res.status(400).json({msg:"Enterd email address is already exist"});
  }
  else{
    //if the enterd email address is not existing in the database , it will create a new one with the enterd one and store the created user in a variable:-
//generate a salt with a cost factor of 10(you can provide any number , the higher the number the password will be more secured)
const salt= await bcrypt.genSalt(10);
//hash(protect) the password using the generated salt
const hashedPassword= await bcrypt.hash(password,salt);
   var user= new User({fullName,email,password:hashedPassword
    
   });
   //save the user:-
  user= await user.save();
  //send a response to user after the signup api is success:-
  res.json(user);
    

  }


    
} catch (e) {
  res.status(500).json({error:e.message})  ;
}
});

//creating login api

authRouter.post('/api/signin',async(req,res)=>{
try {
//extract username ,email and password from the request :-
const {email,password} = req.body;
//store all the values from the collection in findUser variable:- 
const findUser=await User.findOne({email});
if(!findUser){
  res.statusCode(400).json({message:"User not found with this email"});
}else{
  // checking the user enterd password is available in the database:-
 const isMatched= await bcrypt.compare(password,findUser.password);
 if(!isMatched){
  res.statusCode(400).json({message:"Incorrect Password"});
 }else{
//if password is matched then go to signin
// create a accesstoken after signin we use a package named-jsonwebtoken
const token= jwt.sign({id:findUser._id},"passwordKey");
//send the response after the successfull signin,but dont send the password 
//remove the password from the response:
const {password, ...userWithoutPassword}=findUser._doc;
//send the response
res.json({token,...userWithoutPassword});

 }
}
  
} catch (e) {
  res.status(500).json({error:e.message})  ;
}

});


// export the auth Router:-
module.exports= authRouter;