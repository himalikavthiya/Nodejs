const joi=require('joi');

/**create hotel */
const createHotel={
    body:joi.object().keys({
        hotel_name:joi.string().required().trim(),
        email:joi.string().required().trim(),
        hotel_roomNo:joi.number().required(),
        hotel_roomPrice:joi.number().required(),
        hotel_location:joi.string().required().trim()
    }),
};

module.exports={
    createHotel
}