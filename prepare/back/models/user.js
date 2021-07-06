
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', { // MySQL에는 users 테이블 생성
    // id가 기본적으로 들어있음
    email: {
      // 컬럼에 대한 설명
      type: DataTypes.STRING(30), //STRING, TEXT(긴글), BOOLEAN, INTEGER, FLOAT, DATETIMNE 
      allowNull: false, // false 필수
      unique: true, // 고유한 값
    },
    nickname: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(100),  // 암호화하면 길이가 늘어나기때문에 100개
      allowNull: false,
    },
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci', // 한글 저장
  });

  // 관계가 있는 테이블들을 밑에 써줌
  User.associate = (db) => {
    // 한명이 게시글 여러개 1:N 관계
    db.User.hasMany(db.Post); // 작성한 게시글들
    db.User.hasMany(db.Comment);
    // 좋아요 관계
    db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' }); // 중간 테이블 이름 Like, 내가 like를 누른 게시글들
    // 내가 팔로잉하고 있는 사람을 찾으려면 팔로워 목록에서 나를 찾아야하고
    // 나를 팔로잉하고 있는 사람을 찾으려면 팔로잉 목록에서 나를 찾는다.
    // 중간 테이블이 생기는데 같은 테이블을 참고하고 있으므로 forginKey로 각 테이블의 컬럼명을 바꿔줌

    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers', foreginKey: 'FollowingId' });
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings', foreginKey: 'FollowerId' });
  };
  return User;
};
