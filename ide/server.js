const express = require("express");
const serverRouter = require("./router/serverRouter")
const ideRouter = require("./router/ideRouter")
const session = require('express-session');
const app = express();
const DBManager = require('./DBManager')

app.set("port", process.env.port || 8000);
app.use(express.urlencoded({
  limit: "50mb",
  extended: true,
  parameterLimit: 1000000
}));
app.use(express.json({
  limit: "50mb"
}));

app.use(express.static('public'))
app.use(express.static('node_modules'))
app.set('view engine', 'ejs')

app.use(session({
  key: 'sid', // 세션의 키 값
  secret: 'secret', // 세션의 비밀 키
  resave: false, // 세션 항상 저장 여부
  saveUninitialized: true, // 세션이 저장되기전 상태
  cookie: { // 쿠키 설정
    maxAge: 24000 * 60 * 60
  }
}))

app.use("/", serverRouter);
app.use("/ide", ideRouter);
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});
