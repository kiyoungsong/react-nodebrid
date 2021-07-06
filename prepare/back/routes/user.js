const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { User, Post } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const router = express.Router();


router.get('/', async (req, res, next) => { // GET /user
  try {
    if (req.user) {
      const fullUserWithoutPassword = await User.findOne({ 
        where: { id: req.user.id },
        attributes: {
          //['id', 'nickname', 'email'],
          exclude: ['password'],
        },
        include: [{
          model: Post,
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followings',
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followers',
          attributes: ['id'],
        }]
       });
       res.status(200).json(fullUserWithoutPassword);
    } else {
      res.status(200).json(null);
    }
    
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// post/user/login
// 미들웨어 확장 기법
router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    // passport index 부분 실행
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const fullUserWithoutPassword = await User.findOne({ 
        where: { id: user.id },
        attributes: {
          //['id', 'nickname', 'email'],
          exclude: ['password'],
        },
        include: [{
          model: Post,
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followings',
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followers',
          attributes: ['id'],
        }]
       });
      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next);
}); 

router.post('/', isNotLoggedIn, async (req, res, next) => {  // post/user
  try {
    // 이메일 중복체크
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      }
  });
  if (exUser) {
    return res.status(403).send('이미 사용중인 아이디입니다.');   // 400은 클라이언트 요청 에러
  }
  
  // 10 ~ 13 숫자를 넣어줌
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3060');
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // 혹은 npm i cors 설치
    res.status(200).send('ok'); // 201은 잘생성됨
  } catch (err) {
    console.error(err);
    next(error);  // next를 통해서 에러를 보냄 한방에 처리(500)
  }
});

router.post('/logout', isLoggedIn, (req, res, next) => {
  req.logout();
  req.session.destroy();
  res.send('ok');
});

module.exports = router;