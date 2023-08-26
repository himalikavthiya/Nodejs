const Joi=require('joi');

/**create pharmacy */
const createPharmacy={
    body:Joi.object().keys({
        medicine_name:Joi.string().trim().required(),
        medicine_type:Joi.string().trim().required(),
        medicine_dis:Joi.string().trim().required(),
        medicine_dosge:Joi.number().integer().required(),
        madicine_price:Joi.number().integer().required()
    })
};

module.exports={
    createPharmacy
}