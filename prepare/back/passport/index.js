const passport = require('passport');
const local = require('./local');
const { User } = require('../models');

module.exports = () => {
  passport.serializeUser((user, done) => {
    // 세션에 유저아이디만 가지고 있고
    done(null, user.id);
  });

  // 로그인을 성공하고나서 그 다음 요청부터 실행하는 부분
  passport.deserializeUser(async (id, done) => {
    try{
      const user = await User.findOne({
        where: { id },
      });
      done(null, user); // req.user에 넣어줌
    } catch (err){
      console.error(err);
      done(err);
    }
  });

  local();
}