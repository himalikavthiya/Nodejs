const express = require("express");
const { hotelController } = require("../../controllers");
const { hotelValidation } = require("../../validations");
const  validate = require("../../middlewares/validate");

const router = express.Router();

/**create hotel data */
router.post("/create-hotel",
validate(hotelValidation.createHotel),
 hotelController.createHotelDetail);

/**get Hotel data list*/
router.get("/getHotelList", hotelController.getHotelList);

/** Delete hotel data  */
router.delete("/deleteHotel/:hotelId", hotelController.deteleHotelId);

/** Update hotel data  */
router.put("/updateHotel/:hotelId", hotelController.updateHotel);

module.exports = router;
