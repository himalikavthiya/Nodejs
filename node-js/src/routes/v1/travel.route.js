const express = require("express");
const { travelController } = require("../../controllers");

const router = express.Router();

/**Create trvel Detail */
router.post("/create-travel", travelController.createTravel);

/**Get travel detail List */
router.get('/list-travel',travelController.getTravelList);

/**Delete travel detail list */
router.delete('/delete-travel/:travelId',travelController.deletetravel);


module.exports = router;
