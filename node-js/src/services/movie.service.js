const { movie } = require("../models");

/**create movie detail */
const createMovie = async (reqBody) => {
  return movie.create(reqBody);
};

/**get movie detail list */
const getMovieList=async(req,res)=>{
    return movie.find({$or:[{featured:true}]});
    // return movie.find();
}

/**Get movie detail ID */
const getMovieId=async(movieId)=>{
  return movie.findById(movieId);
};

/**delete movie detail id */
const deleteMovie=async(movieId)=>{
  return movie.findByIdAndDelete(movieId);
}

module.exports = {
  createMovie,
  getMovieList,
  getMovieId,
  deleteMovie
};
