const { stationary } = require("../models");

/**create stationary detail */
const createStationary = async (reqBody) => {
  return stationary.create(reqBody);
};

/**Get stationary list */
const getStationaryList = async (req, res) => {
  // return stationary.find();
  return stationary.find({ $or: [{ is_active: false }] });
};

/**delete stationary detail by id */
const getstationaryId = async (stationaryId) => {
  return stationary.findById(stationaryId);
};

/**Delete Stationary */
const deleteStationaryId = async (stationaryId) => {
  return stationary.findByIdAndDelete(stationaryId);
};

/**Update stationary ID */
const updateStationary = async (stationaryId, updateBody) => {
  return stationary.findByIdAndUpdate(stationaryId, { $set: updateBody });
};

module.exports = {
  createStationary,
  getStationaryList,
  getstationaryId,
  deleteStationaryId,
  updateStationary,
};
