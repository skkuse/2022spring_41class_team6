const DBManager = require("../../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;

const apis = {
    // 로그인 POST
    async userLoginPost(req,res) {
        try {
            let session = req.session;
            let body = req.body;
            let result = await DBManager.User.findOne({
                where: {
                    email: body.email
                }
            });
            let dbPassword = result.password;
            let inputPassword = body.password;
            let isSuccess = false;
            
            if (dbPassword == inputPassword) {
                console.log("비밀번호 일치");
                // 세션 설정
                session.uid = result.id;
                isSuccess = true;
            }
            else {
                console.log("비밀번호 불일치");
            }
            
            res.send(isSuccess);
        }
        catch(err) {
            console.log(err)
        }
    },
    // req로부터 유저 정보 입력받아 가입
    async userRegister(req,res) {
        const isOverlap = await apis.checkEmailOverlap(req)
        if (isOverlap) {
            console.log("이메일이 중복되었습니다.")
        }
        else {
            await DBManager.User.create({
                email: req.body.email,
                password: req.body.password
            })
            let user = await DBManager.User.findOne({
                where: {
                    email: req.body.email
                }
            })
            // 가입과 함께 UserProblemSet에서 해당 유저의 모든 문제셋이 is_solved에 N이 들어간다.
            const problems = await DBManager.Problem.findAll()
            console.log(problems)
            for (let i = 0; i < problems.length; i++) {
                await DBManager.UserProblemSet.create({
                    is_solved: 'N',
                    user_id: user.id,
                    problem_id: problems[i].id
                })
            }
        }
        // res.redirect('/')
    },

    // 정답 확인
    async checkAnswer(req){
        const result = await DBManager.Problem.findOne({
            where: {
                id : req.body.pid,
                answer : req.body.output
            }
        })
        if(result != null){
            await DBManager.UserProblemSet.update(
                {is_solved : 'Y'},
                {where:{
                    user_id : req.session.uid,
                    problem_id : pid
                }}
            )
            res.send(true)
        }
        else
            res.send(false);
    },
    // 이메일 중복 검사
    async checkEmailOverlap(req) {
        const res = await DBManager.User.findOne({
            where: {
                email: req.body.email
            }
        })
        console.log(res);
        if (res==null) {
            return false;
        }
        else {
            return true;
        }
    },

    // 유저 정보 가져오기
    async getUserInfo(req) {
        let result = await DBManager.User.findOne({
            where: {
                id: req.params.id
            },
            include:{
                model: DBManager.UserProblemSet
            }
        });
        res.send(result);
    },

    // 요청한 문제 출력
    async getProblem(req,res) {
        const problem = await DBManager.Problem.findOne({
            where: {
                chapter: req.body.chapter
            }
        })
        res.send(problem);
    },

    // 모든 문제 호출
    async getAllProblem() {
        const problems = await DBManager.Problem.findAll()
        res.send(problems.dataValues);
    },

    // 튜토리얼 번호 출력
    async getTutorial(req,res){
        const tutorial = await DBManager.Tutorial.findOne({
            where:{
                chapter: req.body.chapter
            }
        })
        // console.log(tutorial)
        res.send(tutorial);
    },
    async getAllTutorial(){
        const tutorials = await DBManager.tutorial.findAll({})
        res.send(tutorials);
    },
    // 해당 유저가 푼 문제 가져오기
    async getUserProblem(req,res){
        console.log(req.body)
        const problems = await DBManager.UserProblemSet.findAll({
            where: {
                user_id : req.session.uid,
            },
            include:[{
                model: DBManager.Problem,
                where:{
                    chapter : req.body.chapter
                }
            }]
        })
        console.log(problems)
        res.send(problems)
    },
    async getAllTutorial(){
        const tutorials = await DBManager.tutorial.findAll({})
        res.send(tutorials);
    },
    async saveCode(req,res){
        const problem = await DBManager.problem.findOne({
            where:{
                chapter: req.body.chapter
            }
        })
        await DBManager.UserSaveCode.create({
            problem_id : problem.id,
            user_id : req.session.uid,
            code : req.body.code
        })
    },
    async loadCode(req,res){
        const problem = await DBManager.problem.findOne({
            where:{
                chapter: req.body.chapter
            }
        })
        const code = await DBManager.UserSaveCode.findOne({
            where:{
                problem_id : problem.id,
                user_id : req.session.uid
            }
        })
        res.send(code)
    }
}

module.exports = apis;
