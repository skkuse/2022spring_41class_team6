const DBManager = require("../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;

const apis = {
    // req로부터 유저 정보 입력받아 가입
    async userRegister(req) {
        const isOverlap = await apis.checkEmailOverlap(req)
        if (isOverlap) {
            console.log("이메일이 중복되었습니다.")
        }
        else {
            await DBManager.User.create({
                email: req.params.email,
                password: req.params.password
            })
            let user = await DBManager.User.findOne({
                attributes:['id'],
                where:{
                    email:req.params.email
                }
            })
            // 가입과 함께 UserProblemSet에서 해당 유저의 모든 문제셋이 is_solved에 N이 들어간다.
            const problems = await apis.getAllProblem() 
            for(let i=0; i<problems.length; i++){
                await DBManager.UserProblemSet.create({
                    is_solved:'N',
                    user_id: user.id,
                    problem_id:problems.id
                })
            }
        }
    },

    // 이메일 중복 검사
    async checkEmailOverlap(req) {
        const res = await DBManager.User.findOne({
            where: {
                email: req.params.email
            }
        })
        if (res) {
            return false;
        }
        else {
            return true;
        }
    },

    // 유저 정보 가져오기
    async getUserInfo(req){
        let result = await DBManager.User.findOne({
            where:{
                id:req.params.id
            }
        });
        return result;
    },

    // 요청한 문제 출력
    async getProblem(req){
        const problem = await DBManager.Problem.findOne({
            where:{
                id:req.params.id
            }
        })
        return problem;
    },

    // 모든 문제 호출
    async getAllProblem(){
        const problems = await DBManager.Problem.findAll()
        return problems;
    }


}

module.exports = apis;