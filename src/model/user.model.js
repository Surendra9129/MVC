const mongoose=require('mongoose');

const userSchema=new mongoose.Schema(
    { 
       
        first_name:{type:String, required:false},
        last_name:{type:String, required:false},
        email:{type:String, required:false},
        gender:{type:String, required:false, default:"Male"}
    },
    {
       versionKey:false,
       timestamps:true
    }
);

const user=mongoose.model('user',userSchema);

module.exports=user;