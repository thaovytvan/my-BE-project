const express = require('express');
const router = express.Router();
const {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;
