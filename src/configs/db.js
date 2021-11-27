const mongoose=require('mongoose');

const connect=()=>{
    return mongoose.connect(`mongodb+srv://surendra:ssurendra9@cluster0.n3ctp.mongodb.net/test`);
}

module.exports=connect;