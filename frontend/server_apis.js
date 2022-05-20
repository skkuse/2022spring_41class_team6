const models = require("./models/index.js");
const sequelize = require("sequelize");
const Op = sequelize.Op;

const apis = {
    // 로그인 GET
    async userLoginGet(req, res) {
        let session = req.session;

        res.render("/auth/login", {
            session: session
        })
    },
    // 로그인 POST
    async userLoginPost(req, res) {

        try {
            console.log(req.body)
            let body = req.body;
            let result = await DBManager.User.findOne({
                where: {
                    email: body.email
                }
            });

            let dbPassword = result.dataValues.password;
            let inputPassword = body.password;

            if (dbPassword == inputPassword) {
                console.log("비밀번호 일치");
                // 세션 설정
                req.session.email = body.userEmail;
            }
            else {
                console.log("비밀번호 불일치");
            }
            res.redirect("/auth/login");
        }
        catch (err) {
            console.log(err)
        }
    },
    // req로부터 유저 정보 입력받아 가입
    async userRegister(req, res) {
        let email = req.body.email;
        let email2 = req.body.email2;
        let pw = req.body.pw;
        let pw2 = req.body.pw2;

        console.log(email, email2, pw, pw2)
        try {
            const Overlap = await models.User.findOne({
                where: {
                    email: email
                }
            })
            if (Overlap == null) {
                alert("이메일이 중복되었습니다.");
            }
            else {
                models.User.create({
                    email: req.body.email,
                    password: req.body.password
                })
                alert("생성완료");
                // let user = await DBManager.User.findOne({
                //     attributes: ['id'],
                //     where: {
                //         email: req.body.email
                //     }
                // })
                // // 가입과 함께 UserProblemSet에서 해당 유저의 모든 문제셋이 is_solved에 N이 들어간다.
                // const problems = apis.getAllProblem()
                // for (let i = 0; i < problems.length; i++) {
                //     await DBManager.UserProblemSet.create({
                //         is_solved: 'N',
                //         user_id: user.id,
                //         problem_id: problems.id
                //     })
                // }
            }
        } catch (e) {
            console.log(e)
        }
        res.redirect('/')
    },

    // 이메일 중복 검사
    async checkEmailOverlap(req) {
        const res = await DBManager.User.findOne({
            where: {
                email: req.body.email
            }
        })
        console.log(res);
        if (res == null) {
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
            include: {
                model: DBManager.UserProblemSet
            }
        });
        return result;
    },

    // 요청한 문제 출력
    async getProblem(req) {
        const problem = await DBManager.Problem.findOne({
            where: {
                id: req.params.id
            }
        })
        return problem.dataValues;
    },

    // 모든 문제 호출
    async getAllProblem() {
        const problems = await DBManager.Problem.findAll()
        return problems;
    },

    // 튜토리얼 번호 출력
    async getTutorial(req) {
        const tutorial = await DBManager.tutorial.findOne({
            where: {
                id: req.params.id
            }
        })
        return tutorial.dataValues;
    },
    async getAllTutorial() {
        const tutorials = await DBManager.tutorial.findAll({})
        return tutorials;
    }

}

module.exports = apis;