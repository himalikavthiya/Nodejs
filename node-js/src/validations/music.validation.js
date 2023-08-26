const Joi = require("joi");

/**create music */
const createMusic={
    body:Joi.object().keys({
        title:Joi.string().trim().required(),
        filename:Joi.string().trim().required(),
        mimetype:Joi.string().trim().required(),
        genre:Joi.string().trim().required(),
        lyrics:Joi.string().trim().required()
    })
};

module.exports={
    createMusic
}