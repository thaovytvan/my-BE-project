const pool = require('../database/config');

const { getPostByUserIdQuery } = require('../queries/post.queries');

const getPostByUserIdService = async (req, res) => {
  try {
    const { userId } = req.params;
    const getPostByUserId = getPostByUserIdQuery(userId);
    const post = await pool.query(getPostByUserId);
    res.status(200).json({
      response: post.rows,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error getting post: ' + error });
  }
};

module.exports = { getPostByUserIdService };
