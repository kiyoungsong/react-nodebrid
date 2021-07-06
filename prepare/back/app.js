const { response } = require('express');
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');
const morgan = require('morgan');
const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');
const userRouter = require('./routes/user');
const db = require('./models');
const passportConfig = require('./passport');

dotenv.config();

const app = express();

db.sequelize.sync().then(()=>{
  console.log('db 연결 성공');
}).catch(console.error);
passportConfig();

app.use(morgan('dev'));
// req.body 형식으로 받기 위한 준비작업
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 로그인 세션 관리를 위한
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  saveUninitialized: false,
  resave: false,
  secret: process.env.COOKIE_SECRET,
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('hello express');
});

// 라우터 분리
// prefix, 라우터파일
app.use(cors({
  origin: 'http://localhost:3000', // 주소입력시 주소를통해 온 요청만 처리함 credentials이 true 면 * 이면 안됨
  credentials: true, // 쿠키를 보내기 위함
}));  // 모든 요청에다 처리함
app.use('/post', postRouter);
app.use('/posts', postsRouter);
app.use('/user', userRouter);

// 에러처리 미들웨어(예로 에러페이지를 띄어준다던가 특정 정보를 빼고 보내주고싶다던지)
// app.use((err, req, res, next) => {
// });

app.listen(3060, () => {
  console.log('서버 실행 중');
});