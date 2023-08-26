const Joi=require('joi');

/**create travel */
const createTravel={
    body:Joi.object().keys({
        trip_name:Joi.string().trim().required(),
        trip_country:Joi.string().trim().required(),
        trip_des:Joi.string().trim().required(),
        numOfTraveler :Joi.number().integer().required()
    })
};

module.exports={
    createTravel
}