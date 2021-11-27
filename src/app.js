const port=5000;
const express=require('express');
const mongoose=require('mongoose');
const app=express();


const connect=require('./configs/db')
// const user=require('./model/user.model');
// const post=require('./model/post.model');
// const comment=require('./model/comment.model');
// const tag=require('./model/tag.model');
const postcontroller=require('./controller/post.controller');
const usercontroller=require('./controller/user.controller');
const commentcontroller=require('./controller/comment.controller');
const tagcontroller=require('./controller/tag.controller');

app.use(express.json());
app.use('/post',postcontroller);
app.use('/users',usercontroller);
app.use('/comment',commentcontroller);
app.use('/tag',tagcontroller);

app.listen(port,async()=>{
    await connect();
    console.log(`running on port ${port}`);
})