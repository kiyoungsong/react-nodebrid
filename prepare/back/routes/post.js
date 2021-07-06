const express = require('express');
const { Post, Image, Comment, User } = require('../models');
const { isLoggedIn } = require('./middlewares')
const router = express.Router();

router.post('/', isLoggedIn, async (req, res, next) => { // 실제로는 /post
  try {
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
    })
    // 방금 생성한 post가져오고 
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [{
        model: Image,
      }, {
        model: Comment
      }, {
        model: User,
      }]
    })
    res.status(201).json(fullPost);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post('/:postId/comment', isLoggedIn, async (req, res, next) => { // 실제로는 /post
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
    })
    if (!post) {
      return res.status(403).send('존재하지 않는 게시글입니다.');
    }

    const comment = await Comment.create({
      content: req.body.content,
      PostId: req.params.postId,
      UserId: req.user.id,
    })
    await Post.create({
      content: req.body.content,
    })

    res.status(201).json(post);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.delete('/', (req, res) => {
  res.json({ id: 1});
});

module.exports = router;
