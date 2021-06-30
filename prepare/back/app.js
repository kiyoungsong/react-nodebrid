const { response } = require('express');
const express = require('express');
const postRouter = require('./routes/post');
const app = express();



app.get('/', (req, res) => {
  res.send('hello express');
});

app.get('/posts', (req, res) => {
  res.json([
    { id: 1, content: 'hello' },
    { id: 2, content: 'hello2' },
    { id: 3, content: 'hello3' },재
  ]);
});

// 라우터 분리
// prefix, 라우터파일
app.use('/post', postRouter);

app.listen(3065, () => {
  console.log('서버 실행 중');
});