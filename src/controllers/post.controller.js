const { getPostByUserIdService } = require('../services/post.services');

const getPostByUserId = async (req, res) => getPostByUserIdService(req, res);

module.exports = { getPostByUserId };
