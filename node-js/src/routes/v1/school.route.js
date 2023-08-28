const express = require("express");
const { schoolController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { schoolValidation } = require("../../validations");

const router = express.Router();

/**create school detail */
router.post(
  "/create-school",
  validate(schoolValidation.createSchool),
  schoolController.createSchool
);

/**Get school detail List */
router.get("/list-school", schoolController.getSchoolList);

/**delete school detail Id */
router.delete("/delete-school/:schoolId", schoolController.deleteSchool);

/**update school detail Id */
router.put("/update-school/:schoolId", schoolController.updateSchool);

module.exports = router;
