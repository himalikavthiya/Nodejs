const Joi=require('joi');

/**create stationary */
const createStationary={
    body:Joi.object().keys({
        stationary_name:Joi.string().trim().required(),
        item_title:Joi.string().trim().required(),
        item_price:Joi.number().required(),
        item_color:Joi.string().trim().required(),
    })
};

module.exports={
    createStationary
}