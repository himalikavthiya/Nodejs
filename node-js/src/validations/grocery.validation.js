const joi=require('joi');

/**create grocery */
const createGrocery={
    body:joi.object().keys({
        product_id:joi.number().integer().required(),
        product_name:joi.string().required().trim(),
        product_price:joi.number().integer().required(),
        availble_stock:joi.string().required().trim()
    }),
};

module.exports={
    createGrocery
}