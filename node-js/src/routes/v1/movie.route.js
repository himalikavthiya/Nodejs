const express = require("express");
const { movieController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { movieValidation } = require("../../validations");

const router = express.Router();

/**create movie detail */
router.post(
  "/create-movie",
  validate(movieValidation.createMovie),
  movieController.createMovie
);

/**get movie detail list */
router.get("/list-movie", movieController.getMovieList);

/**delete movie detail */
router.delete("/delete-movie/:movieId", movieController.deleteMovie);

/**update movie detail ID*/
router.put("/update-movie/:movieId", movieController.updateMovie);

module.exports = router;
