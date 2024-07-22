const mongoose=require("mongoose");
//creating collection in mongoDB
const userSchema= mongoose.Schema({
    fullName:{
        type: String,
        required: true,
        trim:true,
    
    },
   email:{
      type:String,
      required:true,
      trim:true,    
      validate:{
        validator:(value)=>{
            const result= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
              return result.test(value);
        },
        message:"Please enter a valid email address",
    }
   },
   state:{
    type:String,
    //making field not required :-
    default:""
   },
   city:{
    type:String,
    //making field not required :-
    default:""
   },
   locality:{
    type:String,
    //making field not required :-
    default:""
   },
   password:{
    type:String,
    required:true,
    validate:{
        validator:(value)=>{
            //check if the password is atleast 8 characters
            return value.length >= 8;
        },
        message:"password must be atleast 8 charcters"
    }

   }
});

//create above added collection in mongDB:
const User=mongoose.model("User",userSchema);
//* mongo db store the user collection as user, because the mongo db collction name must be in small letters
//export the created collection:-
module.exports=User;

