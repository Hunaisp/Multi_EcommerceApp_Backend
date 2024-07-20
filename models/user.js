const mongoose=require("mongoose");
//creating collection in mongoDB
const userSchema= mongoose.Schema({
    fullName:{
        type: String,
        required: true,
        trim:true
    },
   email:{
      type:String,
      required:true,
      trim:true
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

   }
});

//create above added collection in mongDB:
const User=mongoose.model("User",userSchema);
//* mongo db store the user collection as user, because the mongo db collction name must be in small letters
//export the created collection:-
module.exports=User;

