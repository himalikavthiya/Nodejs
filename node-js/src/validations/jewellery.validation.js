const Joi=require('joi');

/**create jewellery */
const createjewellery={
    body:Joi.object().keys({
    jewellery_name:Joi.string().required().trim(),
    jewellery_price:Joi.number().integer().required(),
    jewellery_dis:Joi.string().trim().allow(""),
    quantity:Joi.number().integer().required(),

    }),
};

module.exports={
    createjewellery
}