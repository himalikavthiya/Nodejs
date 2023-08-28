const express = require("express");
const { travelController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { travelValidation } = require("../../validations");

const router = express.Router();

/**Create trvel Detail */
router.post("/create-travel",
validate(travelValidation.createTravel),
travelController.createTravel);

/**Get travel detail List */
router.get('/list-travel',travelController.getTravelList);

/**delete travel detail list */
router.delete('/delete-travel/:travelId',travelController.deletetravel);

/**update travel detail By ID */
router.put('/update-travel/:travelId',travelController.updateTravel);

module.exports = router;
