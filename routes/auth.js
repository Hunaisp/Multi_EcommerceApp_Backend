const express = require('express');
const user=require('../models/user');
const User = require('../models/user');
const authRouter=express.Router();
//creating signup api :-

authRouter.post('/api/signup',async(req,res)=>{
try {
    //extract username ,email and password from the request :-
  const {fullName,email,password} = req.body;
  const existingEmail = await User.findOne({email});
  if(existingEmail){
    //if user enterd email is already exist return statusCode 400 and send the error message
    return res.status(400).json({msg:"Enterd email address is already exist"});
  }
  else{
    //if the enterd email address is not existing in the database , it will create a new one with the enterd one and store the created user in a variable:-

   var user= new User({fullName,email,password});
   //save the user:-
  user= await user.save();
  //send a response to user after the signup api is success:-
  res.json(user);
    

  }


    
} catch (error) {
    
}
});