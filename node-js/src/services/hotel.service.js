const { hotel } = require("../models");

/**create hotel details */
const createHotelDetails = async (reqBody) => {
  return hotel.create(reqBody);
};

/** get hotel list*/
const getHotelList = async (req, res) => {
  // return hotel.find();
  return hotel.find({$or:[{is_active:true}]});
};

/**Get Hotel details by id */
const getHotelId = async (hotelId) => {
  return hotel.findById(hotelId);
};

/**Delete hotel */
const deteleHotelId = async (hotelId) => {
  return hotel.findByIdAndDelete(hotelId);
};

module.exports = {
  createHotelDetails,
  getHotelList,
  getHotelId,
  deteleHotelId,
};
