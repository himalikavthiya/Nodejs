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
  return User.find({$or:[{is_active:false}]});
};
module.exports = { createUser, getUserList };
