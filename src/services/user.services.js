const pool = require('../database/config');
const {
  getUsersQuery,
  getUserByIdQuery,
  updateUserQuery,
  deleteUserQuery,
  createUserQuery,
} = require('../queries/user.queries');

const getUsersService = async (req, res) => {
  try {
    const getUsers = getUsersQuery();
    const users = await pool.query(getUsers);
    res.status(200).json({
      response: users.rows,
      message: 'Users retrieved successfully',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error getting users: ' + error });
  }
};

const getUserByIdService = async (req, res) => {
  try {
    const { userId } = req.params;
    const getUserById = getUserByIdQuery(userId);
    const userDetail = await pool.query(getUserById);
    res.status(200).json({ response: userDetail.rows, message: 'User retrieved successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error getting user by id: ' + error });
  }
};

const createUserService = async (req, res) => {
  try {
    const { name, age, email, phone, company } = req.body;

    const createUser = createUserQuery(name, age, email, phone, company);

    const data = await pool.query(createUser);

    res.status(201).json({ response: data.rows[0], message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating user: ' + error });
  }
};

const updateUserService = async (req, res) => {
  try {
    const { userId } = req.params;
    const { name, age, email, phone, company } = req.body;
    const updateUser = updateUserQuery(userId, name, age, email, phone, company);
    const data = await pool.query(updateUser);
    res.status(200).json({ response: data.rows, message: 'User updated successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error updating user: ' + error.message });
  }
};

const deleteUserService = async (req, res) => {
  try {
    const { userId } = req.params;
    const deleteUser = deleteUserQuery(userId);
    const data = await pool.query(deleteUser);
    res.status(200).json({ response: data.rows, message: 'User deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error deleting user: ' + error.message });
  }
};

module.exports = {
  getUsersService,
  getUserByIdService,
  updateUserService,
  deleteUserService,
  createUserService,
};
