const express = require('express');
const next = require('next');
const serverRouter = require("./router/serverRouter");
const session = require('express-session');
const DBManager = require('./DBManager');

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler(); // app에서 뽑아온 get요청 처리기

app.prepare().then(() => {
  const server = express();
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  server.use(session({
    key: 'sid', // 세션의 키 값
    secret: 'secret', // 세션의 비밀 키
    resave: false, // 세션 항상 저장 여부
    saveUninitialized: true, // 세션이 저장되기전 상태
    cookie: { // 쿠키 설정
      maxAge: 24000 * 60 * 60
    }
  }))

  server.use("/", serverRouter);
  server.all('*', (req, res) => handle(req, res));

  server.listen(3060, () => {
    console.log('next + express running on : http://localhost:3060');
  });
});
