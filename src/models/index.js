const { Sequelize } = require('sequelize');

const sequelize = require('../database/sequelize.config');

const db_seq = {};

db_seq.Sequelize = Sequelize;
db_seq.sequelize = sequelize;

db_seq.users = require('./user.model')(sequelize, Sequelize);
db_seq.posts = require('./posts.model')(sequelize, Sequelize);

module.exports = db_seq;
