const express=require('express');
const tag=require('../model/tag.model');
const post=require('../model/post.model');
const router=express.Router();

router.post('/',async(req,res)=>{
    const new_tag= await tag.create(req.body);
    res.status(201).send({new_tag});
})

router.get('/',async(req,res)=>{
   const new_tag=await tag.find({}).lean().exec();
   res.send({new_tag});
})

router.get('/:id',async(req,res)=>{
    const new_tag=await tag.findById(req.params.id);
    res.send(new_tag);
})

router.patch('/:id',async(req,res)=>{
    const new_tag= await tag.findByIdAndUpdate(req.params.id,req,body,{new:true});
    res.status(201).send({new_tag});
})

router.delete('/:id',async(req,res)=>{
    const new_tag= await tag.findOneAndDelete(req.params.id);
})

module.exports=router;