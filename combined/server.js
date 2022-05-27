const next = require('next');
const express = require('express');
const session = require('express-session');
const serverRouter = require("./router/serverRouter");
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

  server.get("/", (req, res) => res.redirect('/auth/login'));
  server.use("/", serverRouter);
  server.all("/_next/*", (req, res) => handle(req, res));
  server.all('*', (req, res) => {
    if (!req.session.uid && req.url != "/auth/login" && req.url != "/auth/signup")
      res.redirect('/auth/login') // 로그인 안 되어 있을 때 리다이렉트
    else if (req.session.uid && (req.url == "/auth/login" || req.url == "/auth/signup"))
      res.redirect('/start') // 이미 로그인 되어 있을 때 리다이렉트
    else
      handle(req, res)
  });

  server.listen(3060, () => {
    console.log('next + express running on : http://localhost:3060');
  });
});
