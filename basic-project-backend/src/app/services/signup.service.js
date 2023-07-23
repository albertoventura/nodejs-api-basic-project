const joi = require("joi");
const md5 = require("md5");
const User = require("../models/user.model");
const signupService = {
    validateData: (data) => {
        const schema = joi.object({
            name: joi.string().trim().required(),
            email: joi.string().trim().email().required(),
            password: joi.string().trim().required().min(8),
            img: joi.string().optional().allow(null).allow("").empty("").default(""),
        });
        const {value, error} = schema.validate(data);

        if(error){
            error.name = "validationError";
            error.status = 400;
            throw error;
        }

        return value;
    },
}

module.exports = signupService;