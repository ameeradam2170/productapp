var express= require('express')
const router =express.Router();
const usermodel = require('../model/user');

// api to add signup data in to the Collection
router.post ('/',(req,res)=>{
    try {
        usermodel(req.body).save()
        res.status(200)
        .send({message:"user data added"})
    } catch (error) {
        res.status(500)
        .send({
            message:"something went wrong",
            error:error.message
        })
    }
})  
router.post('/login',async(req,res)=>{
    try {
        const user = await  usermodel.findOne(
                                {username:req.body.username});
        if(!user){
            return res.send({message:"User not found"})
        }
        if(user.password === req.body.password){
            return res
                .status(200)
                .json({message:`Welcome ${user.username}`,user})
        }
        return res.send({message:"Invalid credential"})

    } catch (error) {
        res
        .status(500).
        send(
            {
            message:"Something went wrong",
            error:error.message
        })
    }
})

module.exports=router