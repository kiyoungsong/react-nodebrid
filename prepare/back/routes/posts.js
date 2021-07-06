const express = require('express');
const { Post, Image, User } = require('../models');
const router = express.Router();

router.get('/', async (req, res, next) => { // GET /posts
  try {
    // 작성한 모든 게시물을 부름
    const posts = await Post.findAll({
      // where: { id: lastId },
      limit: 10, // 10개만 가져와라
      // offset: 0, // 1 ~ 10, 10일때는 11 ~ 20번 가져와라 (DB에서 지원)
      order: [['createdAt', 'DESC']], // 최신 게시글부터 가져옴
      // 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9 ...
      // 처음에 20~ 11까지 가져오는 도중 게시글이 추가가되면 다음은 11부터 ~ 2까지를 가져옴 11이 중복됨
      // 삭제경우도 마찬가지
      // 21, 20, ....
      include: [{
        model: User, // 작성자 정보
      }, {
        model: Image,
      }],
    });
    console.log(posts);
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;