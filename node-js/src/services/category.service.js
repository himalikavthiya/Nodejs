const { category } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createCategory = async (reqBody) => {
  return category.create(reqBody);
};

/**get category List */
const getCategoryList =async(req,res)=>{
   return category.find();
}
module.exports={
  createCategory,
  getCategoryList
}