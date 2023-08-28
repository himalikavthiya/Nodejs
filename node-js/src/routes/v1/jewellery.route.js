const express = require("express");
const { jewelleryController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { jewelleryValidation } = require("../../validations");

const router = express.Router();

/**create jewellary detail */
router.post(
  "/create-jewellery",
  validate(jewelleryValidation.createjewellery),
  jewelleryController.createJewellery
);

/**get jewellary detail list */
router.get("/list-jewellery", jewelleryController.getJewelleryList);

/**Delete jewellery detail id */
router.delete(
  "/delete-jewellery/:jewelleryId",
  jewelleryController.deleteJewellary
);

/**update jewellery detail id */
router.put(
  "/update-jewellery/:jewelleryId",
  jewelleryController.updateJewellary
);

module.exports = router;
