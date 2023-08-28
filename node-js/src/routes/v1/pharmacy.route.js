const express = require("express");
const { pharmacyController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { pharmacyValidation } = require("../../validations");
const router = express.Router();

/**create pharmacy detail */
router.post(
  "/create-pharmacy",
  validate(pharmacyValidation.createPharmacy),
  pharmacyController.createPharmacy
);

/**Get pharmacy detail list */
router.get("/list-pharmacy", pharmacyController.getPharmacyList);

/**Delete pharmacy detail id */
router.delete(
  "/delete-pharmacy/:pharmacyId",
  pharmacyController.deletePharmacy
);

/**Upadate pharmacy detail id */
router.put(
  "/update-pharmacy/:pharmacyId",
  pharmacyController.upadatePharmcy
);

module.exports = router;
