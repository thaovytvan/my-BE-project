const Sequelize = require('sequelize');

const sequelize = new Sequelize(env.POSTGRES_DB, env.POSTGRES_USER, env.POSTGRES_PASSWORD, {
  host: env.POSTGRES_SERVER,
  port: env.POSTGRES_PORT,
  dialect: env.DIALECT,
  operatorsAliases: '0',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = sequelize;
