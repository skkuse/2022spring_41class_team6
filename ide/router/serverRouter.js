const express = require("express");
const DBManager = require("../models");
const router = express.Router();
const serverApis = require("../apis/server_apis");

router.post('/register/:email/:password',(req,res,next)=>{
    serverApis.userRegister(req)
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