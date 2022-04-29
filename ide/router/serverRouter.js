const express = require("express");
const DBManager = require("../models");
const router = express.Router();
const serverApis = require("../apis/server_apis");

router.get('/',(req,res,next)=>{
    res.send("Server is ON")
})

router.get('/auth/login',(req,res,next)=>{
    serverApis.userLoginGet(req,res);
})

router.post('/auth/login',(req,res,next)=>{
    serverApis.userLoginPost(req,res);
})

router.post('/auth/signup',(req,res,next)=>{
    serverApis.userRegister(req,res)
})

router.get('/userInfo/:id',(req,res,next)=>{
    serverApis.getUserInfo(req);
})

router.get('/emailOverlap',(req,res,next)=>{
    
})

router.get('/problem/:id',(req,res,next)=>{
    serverApis.getProblem(req);
})

module.exports = router;