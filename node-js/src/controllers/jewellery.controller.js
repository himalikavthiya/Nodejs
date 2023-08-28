const { jewelleryService } = require("../services");

/**create jewellary detail */
const createJewellery = async (req, res) => {
  try {
    const reqBody = req.body;
    const jewellery = await jewelleryService.createJewellery(reqBody);
    res.status(201).json({
      success: true,
      message: "Create jewellary data successfully !",
      data: { jewellery },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**get jewellary detail list */
const getJewelleryList = async (req, res) => {
  try {
    const jewellery = await jewelleryService.getJewelleryList(req, res);
    res.status(200).json({
      success: true,
      message: "Get jewellery detail list successfully!",
      data: jewellery,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**delete jewellery detail id */
const deleteJewellary = async (req, res) => {
  try {
    const jewelleryId = req.params.jewelleryId;
    const jewelleryExists = await jewelleryService.getJewelleryId(jewelleryId);
    if (!jewelleryExists) {
      throw new Error("jewellery data not found");
    }
    await jewelleryService.deleteJewelleryId(jewelleryId);
    res.status(200).json({
      success: true,
      message: "jewellery data delete successfully !",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**update jewellery detail id */
const updateJewellary = async (req, res) => {
  try {
    const jewelleryId = req.params.jewelleryId;
    const jewelleryExists = await jewelleryService.getJewelleryId(jewelleryId);
    if (!jewelleryExists) {
      throw new Error("jewellery data not found");
    }
    await jewelleryService.updateJewelleryId(jewelleryId,req.body);
    res.status(200).json({
      success: true,
      message: "jewellery data Update successfully !",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createJewellery,
  getJewelleryList,
  deleteJewellary,
  updateJewellary
};
