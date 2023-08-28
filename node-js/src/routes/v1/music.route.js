const express = require("express");
const { musicController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { musicValidation } = require("../../validations");

const router = express.Router();

/**create music data */
router.post(
  "/create-music",
  validate(musicValidation.createMusic),
  musicController.createMusic
);

/**get music data list */
router.get("/list-music", musicController.getMusicList);

/**delete music data ID */
router.delete("/delete-music/:musicId", musicController.deleteMusic);

/**Update music detail Id */
router.put("/update-music/:musicId", musicController.updateMusic);

module.exports = router;
