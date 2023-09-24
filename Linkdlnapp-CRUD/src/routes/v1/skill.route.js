const express = require("express");
const { skillController } = require("../../controllers");

const router = express.Router();

/* post skills listing. */
router.post("/create-skill", skillController.createSkillDetail);

/* Get skill list */
router.get("/list-skill", skillController.getSkillList);

/**Update skill detail by Id */
router.put(
  "/update-skill/:skillId",
  skillController.upadateSkillDetail
);

/**delete skill detail by Id */
router.put("/delete-skill/:skillId", skillController.deleteSkillDetail);

module.exports = router;
