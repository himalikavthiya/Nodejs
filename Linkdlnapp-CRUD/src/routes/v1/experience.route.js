const express = require("express");
const { experienceController } = require("../../controllers");

const router = express.Router();

/* post experiences */
router.post("/create-experience", experienceController.createExperience);

/* Get experience list */
router.get("/list-experience", experienceController.getExperienceList);

/**Update experience detail  */
router.put(
  "/update-experience/:experId",
  experienceController.upadateExperienceDetail
);

/**delete experience detail by Id */
router.put("/delete-experience/:experId", experienceController.deleteExperienceDetail);

module.exports = router;
