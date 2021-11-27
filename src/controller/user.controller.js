const express=require('express');
const user=require('../model/user.model')
const router=express.Router();

router.get('/',async(req,res)=>{
    const new_user=await user.find({}).lean().exec();
    res.send({new_user});
})

router.post('/',async(req,res)=>{
    const new_user= await user.create(req.body);
    res.status(201).send({new_user});
})

router.get('/:id',async(req,res)=>{
    const new_user= await user.findById(req.params.id);
    res.send({new_user}); 
})

router.patch('/:id',async(req,res)=>{
    const new_user=await user.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
    res.status(201).send({new_user});
})
router.delete('/:id',async(req,res)=>{
    const new_user=await user.findByIdAndDelete(req.params.id);
    res.send(new_user);
})
module.exports=router;