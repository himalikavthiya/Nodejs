const express = require("express");
const { groceryController } = require("../../controllers");

const router = express.Router();
/**create grocery detail */
router.post('/create-grocery',groceryController.createGrocery);

/**Get grocery data list */
router.get('/list-grocery',groceryController.getGroceryList);

/**delete grocery data */
router.delete('/delete-grocery/:groceryId',groceryController.deleteGrocery);


module.exports = router;
