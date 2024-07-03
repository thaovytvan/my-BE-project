const {
  getUsersService,
  createUserService,
  getUserByIdService,
  deleteUserService,
  updateUserService,
} = require('../services/user.services');

const getUsers = async (req, res) => getUsersService(req, res);

const createUser = async (req, res) => createUserService(req, res);

const getUserById = async (req, res) => getUserByIdService(req, res);

const updateUser = async (req, res) => updateUserService(req, res);

const deleteUser = async (req, res) => deleteUserService(req, res);

module.exports = { getUsers, getUserById, updateUser, deleteUser, createUser };
