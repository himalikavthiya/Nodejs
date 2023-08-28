const express = require("express");

const { categoryController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { categoryValidation } = require("../../validations");

const router = express.Router();

/*create category*/
router.post(
  "/create-category",
  validate(categoryValidation.createCategory),
  categoryController.createCategory
);

/* Get user category */
router.get("/category-list", categoryController.getCategoryList);

/**Update category data by Id */
router.put("/update-category/:categoryId", categoryController.updateCategory);

module.exports = router;
