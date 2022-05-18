const DBManager = require("../../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;

export default (req,res) =>{

    let email = req.body.email;
    let email2 = req.body.email2;
    let pw = req.body.pw;
    let pw2 = req.body.pw2;

    console.log(email,email2,pw,pw2)
    // const Overlap = DBManager.User.findOne({
    //     where: {
    //         email: email
    //     }
    // })
    // if (Overlap==null) {
    //     alert("이메일이 중복되었습니다.");
    // }
    // else {
    //     DBManager.User.create({
    //         email: req.body.email,
    //         password: req.body.password
    //     })
    //     alert("생성완료");
    //     // let user = await DBManager.User.findOne({
    //     //     attributes: ['id'],
    //     //     where: {
    //     //         email: req.body.email
    //     //     }
    //     // })
    //     // // 가입과 함께 UserProblemSet에서 해당 유저의 모든 문제셋이 is_solved에 N이 들어간다.
    //     // const problems = apis.getAllProblem()
    //     // for (let i = 0; i < problems.length; i++) {
    //     //     await DBManager.UserProblemSet.create({
    //     //         is_solved: 'N',
    //     //         user_id: user.id,
    //     //         problem_id: problems.id
    //     //     })
    //     // }
    // }
    res.redirect('/')
}