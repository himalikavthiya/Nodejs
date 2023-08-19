const Joi=require('joi');

/**create-book-details */
const createBookDetail={
    body:Joi.object().keys({
    book_name:Joi.string().required().trim(),
    book_authar_name:Joi.string().required().trim(),
    book_disc:Joi.string().required().trim(),
    book_price:Joi.string().required().trim()
    }),
};

module.exports={
    createBookDetail
}