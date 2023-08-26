const Joi = require("joi");

/** create user */
const createBus = {
  body: Joi.object().keys({
    bus_name: Joi.string().required().trim(),
    bus_Number: Joi.number().integer().required(),
    route_Name: Joi.string().required().trim(),
    route_price: Joi.number().integer().required()
  }),
};

module.exports={createBus}