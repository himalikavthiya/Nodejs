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
const getUserList=async(filter,options)=>{
  return User.find();
}
module.exports={createUser,getUserList}