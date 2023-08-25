const { bus } = require("../models");

/**create bus detail */
const createBusDetail = async (reqBody) => {
  return bus.create(reqBody);
};

/**Get Bus detail List */
const getBusDetailList = async (req, res) => {
  // return bus.find();
  return bus.find({ $or: [{ bus_available: true }] });
};

/**get bus detail by busId  */
const getBusId = async (busId) => {
  return bus.findById(busId);
};

/**delete Bus details id */
const deleteBusId = async (busId) => {
  return bus.findByIdAndDelete(busId);
};
module.exports = {
  createBusDetail,
  getBusDetailList,
  getBusId,
  deleteBusId,
};
