const express=require('express');
const post=require('../model/post.model');
const router=express.Router();

router.post('/',async(req,res)=>{
    const new_post= await post.create(req.body);
    res.status(201).send({new_post});
})

router.get('/',async(req,res)=>{
   const new_post=await post.find({}).lean().exec();
   res.send({new_post});
})

router.get('/:id',async(req,res)=>{
    const new_post=await post.findById(req.params.id);
    res.send(new_post);
})

router.patch('/:id',async(req,res)=>{
    const new_post= await post.findByIdAndUpdate(req.params.id,req,body,{new:true});
    res.status(201).send({new_post});
})

router.delete('/:id',async(req,res)=>{
    const new_post= await post.findOneAndDelete(req.params.id);
})

module.exports=router;