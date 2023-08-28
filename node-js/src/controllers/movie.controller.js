const { movieService } = require("../services");

/**create movie detail data */
const createMovie = async (req, res) => {
  try {
    const reqBody = req.body;
    const movieExists = await movieService.getMovieByName(reqBody.movie_title);
    if (movieExists) {
      throw new Error(
        `please add other movie this ${movieExists.movie_title} movie already created.`
      );
    }
    const movie = await movieService.createMovie(reqBody);
    res.status(201).json({
      success: true,
      message: "create movie data successfully !",
      data: movie,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**get movie detail list */
const getMovieList = async (req, res) => {
  try {
    const getMovieList = await movieService.getMovieList(req, res);
    res.status(200).json({
      success: true,
      message: "Get Movie detail list successfully!",
      data: getMovieList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**delete movie data id */
const deleteMovie = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const movieExists = await movieService.getMovieId(movieId);
    if (!movieExists) {
      throw new Error("Moive not found!");
    }
    await movieService.deleteMovie(movieId);
    res.status(200).json({
      success: true,
      message: "Movie data delete successfully !",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**update movie data id */
const updateMovie = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const movieExists = await movieService.getMovieId(movieId);
    if (!movieExists) {
      throw new Error("Moive not found!");
    }
    await movieService.updateMovieId(movieId, req.body);
    res.status(200).json({
      success: true,
      message: "Movie data update successfully !",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createMovie,
  getMovieList,
  deleteMovie,
  updateMovie,
};
