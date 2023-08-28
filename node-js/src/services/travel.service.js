const { travel } = require("../models");

/**create travel detail */
const createTravel = async (reqBody) => {
  return travel.create(reqBody);
};

/**Get travel list */
const getTravelList = async (req, res) => {
//   return travel.find();
  return travel.find({ $or: [{ trip_country: India }] });
};

/**get travel Id */
const getTravelId = async (travelId) => {
  return travel.findById(travelId);
};

/**delete travel data id */
const deleteTravel = async (travelId) => {
  return travel.findByIdAndDelete(travelId);
};

/**Update travel data id */
const updateTravel = async (travelId, updateBody) => {
  return travel.findByIdAndUpdate(travelId, { $set: updateBody });
};

module.exports = {
  createTravel,
  getTravelList,
  getTravelId,
  deleteTravel,
  updateTravel,
};
