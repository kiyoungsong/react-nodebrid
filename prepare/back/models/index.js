const Sequelize = require('sequelize');
// 환경변수로 NODE_ENV로 사용한다.
// 베포시에는 production으로 변경
// config.json의 development를 가져온다.
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);


Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
