const mongoose=require('mongoose')

const tagSchema=mongoose.Schema(
    {
        name:{type: String, required:true}
    },
    {
        versionKey:false,
        timestamps:true
    }
);

const tag=mongoose.model('tag',tagSchema);

module.exports=tag;