const { User } = require("../models");

/** Create user*/

const createUser = async (reqBody) => {
  return User.create(reqBody);
};

/**Get user List */
const getUserList = async (req,res) => {
  return User.find();
};

/**get user by Id */
const getUserId = async (userId) => {
  return User.findById(userId);
};

/**upadate User data */
const upadateUser = async (userId, updateBody) => {
  return User.findByIdAndUpdate(userId,updateBody);
};

/**delete User data */
const deleteUser = async (userId) => {
  return User.findByIdAndDelete(userId);
};

module.exports = {
  createUser,
  getUserList,
  getUserId,
  upadateUser,
  deleteUser
};
