const mongoose=require('mongoose');
const data=new mongoose.Schema({
    name:{
        type:String,
        
    },
    phone:{
        type:Number,
        
    },
    address:{
        type:String,
        
    },
    email:{
        type:String,
        
        unique:[true,"Email already exist"]
    },
    password:{
        type:String,
        
    }

})

const Student=new mongoose.model("Student",data);
module.exports=Student;