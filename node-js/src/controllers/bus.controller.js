const { busService } = require("../services");

/**create bus detail */
const createBusDetail = async (req, res) => {
  try {
    const reqBody = req.body;
    const bus = await busService.createBusDetail(reqBody);
    res.status(201).json({
      success: true,
      message: "Bus data create successfully!",
      data: {
        bus,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**Get bus detail List */
const getBusDetailList = async (req, res) => {
  try {
    const getBusDetailList = await busService.getBusDetailList(req, res);
    res.status(200).json({
      success: true,
      message: "Get Bus detail list successfully !",
      data: getBusDetailList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**Delete Bus Detail */
const deleteBusId = async (req, res) => {
  try {
    const busId = req.params.busId;
    const busExists = await busService.getBusId(busId);
    if (!busExists) {
      throw new Error("Bus Not Found!");
    }
    await busService.deleteBusId(busId);
    res.status(200).json({
      success: true,
      message: "Bus data delete successfully !",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**Update Bus Detail */
const updateBusId = async (req, res) => {
  try {
    const busId = req.params.busId;
    const busExists = await busService.getBusId(busId);
    if (!busExists) {
      throw new Error("Bus Not Found!");
    }
    await busService.updateBusId(busId,req.body);
    res.status(200).json({
      success: true,
      message: "Bus data Update successfully !",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createBusDetail,
  getBusDetailList,
  deleteBusId,
  updateBusId
};
