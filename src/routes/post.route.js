const express = require('express');
const router = express.Router();
const { getPostByUserId } = require('../controllers/post.controller');

router.route('/:userId').get(getPostByUserId);

module.exports = router;
