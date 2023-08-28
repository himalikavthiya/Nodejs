const express = require("express");
const { groceryController } = require("../../controllers");
const  validate  = require("../../middlewares/validate");
const { groceryValidation } = require("../../validations");

const router = express.Router();
/**create grocery detail */
router.post('/create-grocery',
validate(groceryValidation.createGrocery),
groceryController.createGrocery);

/**Get grocery data list */
router.get('/list-grocery',groceryController.getGroceryList);

/**delete grocery data */
router.delete('/delete-grocery/:groceryId',groceryController.deleteGrocery);

/**Update grocery data */
router.put('/update-grocery/:groceryId',groceryController.updateGrocery);


module.exports = router;
