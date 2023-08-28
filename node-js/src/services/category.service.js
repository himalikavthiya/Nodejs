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
const getCategoryList = async (req, res) => {
  // return category.find();
   return category.find({$or:[{is_active:false}]});
};

/**Get category ID */
const getCategoryId = async (categoryId) => {
  return category.findById(categoryId);
};

/**update category data by Id */
const updateCategory = async (categoryId, updateBody) => {
  return category.findByIdAndUpdate(categoryId, { $set: updateBody });
};

module.exports = {
  createCategory,
  getCategoryList,
  getCategoryId,
  updateCategory,
};
