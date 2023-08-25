const { grocery } = require("../models");

/**create gerocery details */
const creategrocery = async (reqBody) => {
  return grocery.create(reqBody);
};

/**get Grocery list */
const getGroceryList = async (req, res) => {
//   return grocery.find();
    return grocery.find({$or:[{is_active:true}]})
};

/**Get Grocery ID */
const getGroceryId = async (groceryId) => {
  return grocery.findById(groceryId);
};
/**Delete Grocery id */
const deleteGrocery = async (groceryId) => {
  return grocery.findByIdAndDelete(groceryId);
};

module.exports = {
  creategrocery,
  getGroceryList,
  getGroceryId,
  deleteGrocery,
};
