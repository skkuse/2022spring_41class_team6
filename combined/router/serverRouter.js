const express = require("express");
const router = express.Router();
const serverApis = require("../pages/api/server_apis");
const DBManager = require('../DBManager');

router.post('/api/auth/login',(req,res,next)=>{
  serverApis.userLoginPost(req,res);
})

router.post('/api/auth/signup',(req,res,next)=>{
  serverApis.userRegister(req,res)
})

router.post('/api/auth/logout',(req,res,next)=>{
  serverApis.userLogout(req,res);
})

router.post('/api/userInfo/',(req,res,next)=>{
  serverApis.getUserInfo(req,res);
})

router.post('/api/content',(req,res,next)=>{
  serverApis.getTutorial(req,res);
})

router.post('/api/allContent',(req,res,next)=>{
  serverApis.getAllTutorial(req,res);
})

router.post('/api/problem',(req,res,next)=>{
  serverApis.getProblem(req,res);
})

router.post('/api/allProblem',(req,res,next)=>{
  serverApis.getAllProblem(req,res);
})

router.post('/api/checkAnswer',(req,res,next)=>{
  serverApis.checkAnswer(req,res);
})

router.post('/api/isSolved',(req,res,next)=>{
  serverApis.getUserProblem(req,res)
})

router.post('/api/savecode',(req,res,next)=>{
  serverApis.saveCode(req,res)
})

router.post('/api/loadcode',(req,res,next)=>{
  serverApis.loadCode(req,res)
})

module.exports = router;
