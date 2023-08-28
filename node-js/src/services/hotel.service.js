const { hotel } = require("../models");

/**create hotel details */
const createHotelDetails = async (reqBody) => {
  return hotel.create(reqBody);
};

/** get hotel list*/
const getHotelList = async (req, res) => {
  // return hotel.find();
  return hotel.find({ $or: [{ is_active: true }] });
};

/**Get Hotel details by id */
const getHotelId = async (hotelId) => {
  return hotel.findById(hotelId);
};

/**Delete hotel */
const deteleHotelId = async (hotelId) => {
  return hotel.findByIdAndDelete(hotelId);
};

/**update hotel */
const updateHotelId = async (hotelId, updateBody) => {
  return hotel.findByIdAndUpdate(hotelId, { $set: updateBody });
};

module.exports = {
  createHotelDetails,
  getHotelList,
  getHotelId,
  deteleHotelId,
  updateHotelId,
};
