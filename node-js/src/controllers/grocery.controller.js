const { groceryService } = require("../services");

/**create Grocery detail */
const createGrocery = async (req, res) => {
  try {
    const reqBody = req.body;
    const grocery = await groceryService.creategrocery(reqBody);
    res.status(201).json({
      success: true,
      message: "Create Grocery data successfully !",
      data: { grocery },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**get Grocery detail list */
const getGroceryList = async (req, res) => {
  try {
    const grocery = await groceryService.getGroceryList(req, res);
    res.status(200).json({
      success: true,
      message: "Get Grocery detail list successfully!",
      data: grocery,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**delete Grocery detail id */
const deleteGrocery = async (req, res) => {
  try {
    const groceryId = req.params.groceryId;
    const groceryExists = await groceryService.getGroceryId(groceryId);
    if (!groceryExists) {
      throw new Error("Grocery data not found");
    }
    await groceryService.deleteGrocery(groceryId);
    res.status(200).json({
      success: true,
      message: "Grocery data delete successfully !",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createGrocery,
  getGroceryList,
  deleteGrocery,
};
