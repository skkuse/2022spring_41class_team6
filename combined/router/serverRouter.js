const express = require("express");
const router = express.Router();
const serverApis = require("../pages/api/server_apis");
const DBManager = require('../DBManager');

router.get('/',(req,res)=>{
    // result = DBManager.User.findOne({
    //     where: {
    //         email: "asdf"
    //     }
    // });
    let session = req.session;
    DBManager.User.findOne({
        where: {
            email: "asdf"
        }
    }).then((ress)=>{
        // session.uid = ress.dataValues.id
        res.send([ress.id])
    })
    // console.log(result)
    // res.send(result)
})

router.post('/api/auth/login',(req,res,next)=>{
    serverApis.userLoginPost(req,res);
})

router.post('/api/auth/signup',(req,res,next)=>{
    serverApis.userRegister(req,res)
})

router.post('/api/userInfo/:id',(req,res,next)=>{
    serverApis.getUserInfo(req);
})

router.post('/api/book/contents',(req,res,next)=>{
    serverApis.getTutorial(req,res);
})

router.post('/api/problem',(req,res,next)=>{
    serverApis.getProblem(req,res);
})

router.post('api/allProblem',(req,res,next)=>{
    serverApis.getAllProblem(req);
})

router.post('api/checkAnswer',(req,res,next)=>{
    serverApis.checkAnswer(req)
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
