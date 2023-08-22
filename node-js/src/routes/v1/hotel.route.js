const express = require("express");
const { hotelController } = require("../../controllers");

const router = express.Router();

/**create hotel data */
router.post("/create-hotel", hotelController.createHotelDetail);

/**get Hotel data list*/
router.get("/get-Hotel-List", hotelController.getHotelList);

/** Delete hotel data  */
router.delete("/delete-Hotel-Id/:hotelId", hotelController.deteleHotelId);

module.exports = router;
