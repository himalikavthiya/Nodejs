const { movie } = require("../models");

/**create movie detail */
const createMovie = async (reqBody) => {
  return movie.create(reqBody);
};

/**get movie detail list */
const getMovieList = async (req, res) => {
  return movie.find({ $or: [{ featured: true }] });
  // return movie.find();
};

/**get movie detail by name */
const getMovieByName = async (movie_title) => {
  return movie.findOne({ movie_title });
};

/**Get movie detail ID */
const getMovieId = async (movieId) => {
  return movie.findById(movieId);
};

/**delete movie detail id */
const deleteMovie = async (movieId) => {
  return movie.findByIdAndDelete(movieId);
};

/**Update movie detail Id */
const updateMovieId = async (movieId, upadateBody) => {
  return movie.findByIdAndUpdate(movieId, { $set: upadateBody });
};

module.exports = {
  createMovie,
  getMovieList,
  getMovieByName,
  getMovieId,
  deleteMovie,
  updateMovieId
};
