
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', { // MySQL에는 users 테이블 생성
    // id가 기본적으로 들어있음
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // belongTo의 역할은 밑의 컬럼 생성
    // UserId: {}
    // PostId: {} 
  }, {
    charset: 'utf8mb4',
    collate: 'utf8_general_ci', // 이모티콘 저장
  });
  Comment.associate = (db) => {
    // 어떤 댓글은 사람에게 속함
    db.Comment.belongTo(db.User);
    db.Comment.belongTo(db.Post);
  };
  return Comment;
}
