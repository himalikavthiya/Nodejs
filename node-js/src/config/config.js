const joi = require("joi");
const dotenv = require("dotenv");
dotenv.config();

const envVarsSchema=joi.object({
    PORT:joi.number().default(4500),
    MONGODB_URL:joi.string().trim().description("mongodb url")
    }).unknown();

    // const aa=envVarsSchema
    // .prefs({ errors: { label: "key" } })
    // .validate(process.env);
    // console.log(aa);

    const { value:envVars,error} = envVarsSchema
    .prefs({ errors: { label: "key" } })
    .validate(process.env);
    // console.log(envVars);

    if (error) {
        console.log("Config Error: ", error);
    }

    module.exports={
        port:envVars.PORT,
        mongodb:{
            url:envVars.MONOGODB_URL,
            options:{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            }
        }
    };
