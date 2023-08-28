const { options } = require("joi");
const { User } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createUser = async (reqBody) => {
  return User.create(reqBody);
};

/**Get user List */
const getUserList = async (filter, options) => {
  return User.find({ $or: [{ is_active: false }] });
};

/**get user by Id */
const getUserId = async (userId) => {
  return User.findById(userId);
};

/**upadate User data */
const upadateUser = async (userId, updateBody) => {
  return User.findByIdAndUpdate(userId,updateBody);
};

module.exports = {
  createUser,
  getUserList,
  getUserId,
  upadateUser,
};
