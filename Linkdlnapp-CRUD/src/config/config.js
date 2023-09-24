const joi = require("joi");
const dotenv = require("dotenv");
dotenv.config();

const envVarsSchema = joi
  .object({
    PORT: joi.number().default(4500),
    MONGODB_URL: joi.string().trim().description("mongodb url"),
  })
  .unknown();

// const { value:envVars,error} = envVarsSchema
// .prefs({ errors: { label: "key" } })
// .validate(process.env);

const { error, value: envVars } = envVarsSchema
.validate(process.env);

module.exports = {
  port: envVars.PORT,
  mongodb: {
    url: envVars.MONGODB_URL,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};