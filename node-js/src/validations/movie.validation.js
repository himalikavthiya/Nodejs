const Joi = require("joi");

/**create movie */
const createMovie={
    body:Joi.object().keys({
        movie_title:Joi.string().trim().required(),
        movie_description:Joi.string().trim().required(),
        movie_genre:Joi.string().trim().required(),
        movie_director:Joi.string().trim().required(),
        movie_actors:Joi.string().trim().required()
    })
};

module.exports={
    createMovie
}