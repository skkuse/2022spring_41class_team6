const express = require('express');
const expressSession = require('express-session');
const next = require('next');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const DBManager = require('./DBManager')

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler(); // app에서 뽑아온 get요청 처리기

dotenv.config();
app.prepare().then(() => {
  const server = express();
  server.use(morgan('dev'));
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(cookieParser(process.env.COOKIE_SECRET));
  // server.use(
  //   expressSession({
  //     resave: false,
  //     saveUninitialized: false,
  //     secret: '',
  //     cookie: {
  //       httpOnly: true,
  //       secure: false,
  //     },
  //   }),
  // );
  server.get('/hashtag/:tag', (req, res) => {
    return app.render(req, res, '/hashtag', { tag: req.params.tag });
  });
  server.get('/user/:id', (req, res) => {
    return app.render(req, res, '/user', { tag: req.params.id });
  });
  server.all('*', (req, res) => handle(req, res));

  server.listen(3060, () => {
    console.log('next + express running on : http://localhost:3060');
  });

});
