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
router.get("/getschool-list", schoolController.getSchoolList);

router.delete("/deleteschool/:schoolId", schoolController.deleteSchool);

module.exports = router;
