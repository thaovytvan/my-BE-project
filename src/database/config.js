const pg = require('pg');
const { env } = require('../../config/main.config');

const config = {
  user: env.POSTGRES_USER,
  host: env.POSTGRES_SERVER,
  database: env.POSTGRES_DB,
  password: env.POSTGRES_PASSWORD,
  port: env.POSTGRES_PORT,
};

const pool = new pg.Pool(config);

module.exports = pool;
