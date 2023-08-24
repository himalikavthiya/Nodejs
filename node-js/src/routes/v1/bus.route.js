const express = require("express");
const { busController } = require("../../controllers");
const router = express.Router();

/**Create bus detail */
router.post("/create-bus", busController.createBusDetail);

/**Get Bus Details  */
router.get("/bus-list", busController.getBusDetailList);

/**Delete Bus Detail */
router.delete("/delete-bus/:busId", busController.deleteBusId);

module.exports = router;
