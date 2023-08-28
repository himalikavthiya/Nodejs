const { grocery } = require("../models");

/**create gerocery details */
const creategrocery = async (reqBody) => {
  return grocery.create(reqBody);
};

/**get Grocery list */
const getGroceryList = async (req, res) => {
  // return grocery.find();
    return grocery.find({$or:[{is_active:true,availble_stock:"50kg"}]})
};

/**Get Grocery ID */
const getGroceryId = async (groceryId) => {
  return grocery.findById(groceryId);
};

/**Delete Grocery id */
const deleteGrocery = async (groceryId) => {
  return grocery.findByIdAndDelete(groceryId);
};

/**Update Grocery id */
const updateGrocery = async (groceryId,updateBody) => {
  return grocery.findByIdAndUpdate(groceryId,{$set:updateBody});
};

module.exports = {
  creategrocery,
  getGroceryList,
  getGroceryId,
  deleteGrocery,
  updateGrocery
};
