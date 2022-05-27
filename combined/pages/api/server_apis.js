const DBManager = require("../../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;

const apis = {
  // 로그인 POST
  async userLoginPost(req,res) {
    let isSuccess = false;
    try {
      let session = req.session;
      let body = req.body;
      let result = await DBManager.User.findOne({
        where: {
          email: body.email
        }
      });
      if (result){
        let dbPassword = result.password;
        let inputPassword = body.password;
        if (dbPassword == inputPassword) {
          console.log("비밀번호 일치");
          // 세션 설정
          session.uid = result.id;
          isSuccess = true;
        }
        else {
          console.log("비밀번호 불일치");
        }
      }
      console.log(isSuccess);
    }
    catch(err) {
      console.log(err);
    }
    res.send(isSuccess);
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

  async userLogout(req, res) {
    if(req.session)
      req.session.destroy();
  },

  // 정답 확인
  async checkAnswer(req,res){
    const problems = await DBManager.Problem.findAll({
      where: {
        chapter: req.body.chapter,
        answer : req.body.output
      }
    });
    if(problems.length != 0){
      await DBManager.UserProblemSet.destroy({
        where: {
          user_id : req.session.uid,
          problem_id : problems[0].id
        }
      })
      await DBManager.UserProblemSet.create({
          user_id : req.session.uid,
          problem_id : problems[0].id,
          is_solved : 'Y'
      })
      res.send(true);
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
  async getUserInfo(req,res) {
    let result = await DBManager.User.findOne({
      where: {
        id: req.session.uid
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
  async getAllProblem(req,res) {
    const problems = await DBManager.Problem.findAll()
    res.send(problems);
  },

  // 튜토리얼 불러오기
  async getTutorial(req,res){
    const tutorial = await DBManager.Tutorial.findOne({
      where:{
        chapter: req.body.chapter
      }
    })
    // console.log(tutorial)
    res.send(tutorial);
  },
  async getAllTutorial(req,res){
    const tutorials = await DBManager.Tutorial.findAll({})
    res.send(tutorials);
  },

  // 해당 유저가 푼 문제 가져오기
  async getUserProblem(req,res){
    //console.log(req.body)
    const problem = await DBManager.UserProblemSet.findOne({
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
    res.send(problem)
  },

  // 유저가 쓴 코드 저장 및 불러오기
  async saveCode(req,res){
    const problem = await DBManager.Problem.findOne({
      where:{
        chapter: req.body.chapter
      }
    })
    if(problem != null){
      await DBManager.UserSaveCode.destroy({
        where: {
          problem_id : problem.id,
          user_id : req.session.uid,
        }
      })
      await DBManager.UserSaveCode.create({
        problem_id : problem.id,
        user_id : req.session.uid,
        code : req.body.code
      })
    }
  },
  async loadCode(req,res){
    const problem = await DBManager.Problem.findOne({
      where:{
        chapter: req.body.chapter
      }
    })
    if(problem != null){
      const result = await DBManager.UserSaveCode.findOne({
        where:{
          problem_id : problem.id,
          user_id : req.session.uid
        }
      })
      res.send(result.code);
    }
  }
}

module.exports = apis;
