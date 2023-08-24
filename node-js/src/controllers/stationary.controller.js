const { stationaryService } = require("../services");

/**create stationary detail */
const createStationary = async (req, res) => {
  try {
    const reqBody = req.body;
    const stationary = await stationaryService.createStationary(reqBody);
    res.status(201).json({
      success: true,
      message: "stationary create successfully !",
      data: {
        stationary,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**Get stationary List */
const getStationaryList = async (req, res) => {
  try {
    const getStationaryList = await stationaryService.getStationaryList(
      req,
      res
    );
    res.status(200).json({
      success: true,
      message: "Get stationary list successfully!",
      data: getStationaryList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**delete stationary detail */
const deleteStationary = async (req, res) => {
  try {
    const stationaryId = req.params.stationaryId;
    const StationaryExists = await stationaryService.getstationaryId(
      stationaryId
    );
    if (!StationaryExists) {
      throw new Error("Stationary not found!");
    }
    await stationaryService.deleteStationaryId(stationaryId);
    res.status(200).json({
      success: true,
      message: "stationary data delete successfully !",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createStationary,
  getStationaryList,
  deleteStationary
};
