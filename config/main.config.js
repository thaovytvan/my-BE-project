const { config } = require("dotenv");
const ENV = process.env.NODE_ENV;

let env = config({
  path: `.env.${ENV}`,
});

env = env.parsed;
env.NODE_ENV = ENV;
module.exports = { env };
