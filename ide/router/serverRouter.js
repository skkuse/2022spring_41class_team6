const express = require("express");
const DBManager = require("../models");
const router = express.Router();
const serverApis = require("../apis/server_apis");

router.post('/register/:email/:password',(req,res,next)=>{
    await serverApis.userRegister(req)
})

router.get('/userInfo/:id',(req,res,next)=>{
    let res = await DBManager.User.findOne({
        where:{
            id:req.params.id
        }
    });
    return res;
})

router.get('/emailOverlap',(req,res,next)=>{
    
})

router.get('/problem/:id',(req,res,next)=>{
    await serverApis.getProblem(req);
})