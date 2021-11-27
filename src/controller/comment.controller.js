const express=require('express');
const comment=require('../model/comment.model');
const router=express.Router();

router.post('/',async(req,res)=>{
    const new_comment= await comment.create(req.body);
    res.status(201).send({new_comment});
})

router.get('/',async(req,res)=>{
   const new_comment=await comment.find({}).lean().exec();
   res.send({new_comment});
})

router.get('/:id',async(req,res)=>{
    const new_comment=await comment.findById(req.params.id);
    res.send(new_comment);
})

router.patch('/:id',async(req,res)=>{
    const new_comment= await comment.findByIdAndUpdate(req.params.id,req,body,{new:true});
    res.status(201).send({new_comment});
})

router.delete('/:id',async(req,res)=>{
    const new_comment= await comment.findOneAndDelete(req.params.id);
})

module.exports=router;