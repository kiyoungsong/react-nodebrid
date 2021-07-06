// 로그인 했는지 안했는지 검사하는 부분
exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    // next(err);는 에러처리
    // 밑의는 다음 미들웨어처리
    next();
  } else {
    res.status(401).send('로그인이 필요합니다.');
  }
}

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    // next(err);는 에러처리
    // 밑의는 다음 미들웨어처리
    next();
  } else {
    res.status(401).send('로그인을 하지 않은 사용자만 접근 가능합니다.');
  }
}