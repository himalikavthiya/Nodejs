const express = require("express");
const { educationController } = require("../../controllers");

const router = express.Router();

/* post educationId */
router.post("/create-education", educationController.createEducation);

/* Get education list */
router.get("/list-education", educationController.getEducationList);

/**Update education detail  */
router.put(
  "/update-education/:educationId",
  educationController.upadateEducationDetail
);

/**delete education detail by Id */
router.put("/delete-education/:educationId", educationController.deleteEducationDetail);

module.exports = router;
