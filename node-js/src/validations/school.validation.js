const Joi=require('joi');

/**create school */
const createSchool={
    body:Joi.object().keys({
        school_name:Joi.string().trim().required(),
        branch_code:Joi.number().integer().required(),
        branch_location:Joi.string().trim().required(),
        student_detail:Joi.string().trim().required(),
        facalty_detail:Joi.string().trim().required(),
        number_of_class:Joi.number().required()
    })
};

module.exports={
    createSchool
}