
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', { // MySQL에는 users 테이블 생성
    // id가 기본적으로 들어있음
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // RetweedId 로 변경됨
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci', // 이모티콘 저장
  });
  Post.associate = (db) => {
    db.Post.belongsTo(db.User); // 게시글의 작성자
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' }); // as에 따라 게시글 좋아요 누른사람을 가져옴
    // 리트윗 한개시글은 여러명이 리트윗됨
    db.Post.belongsTo(db.Post, { as: 'Retweet' });
  };
  return Post;
}
