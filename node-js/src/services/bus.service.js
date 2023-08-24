const {
  bus
} = require("../models");

/**create bus detail */
const createBusDetail = async (reqBody) => {
  return bus.create(reqBody);
};

/**Get Bus detail List */
const getBusDetailList = async (req, res) => {
  return bus.find();
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