const joi = require("joi");
const md5 = require("md5");
const jwtService = require("./jwt.service");
const userService = require("../services/user.service");

const loginService = {
    validateData: (data) => {
        const schema = joi.object({
            email: joi.string().trim().email().required(),
            password: joi.string().trim().required().min(6),
        });

        const { error, value } = schema.validate(data);

        if(error) {
            error.name = "ValidationError";
            error.status = 400;
            throw error;
        }

        return value;
    },
    login: async (data) => {
        const passwordHash = md5(data.password);

        const user = await userService.getAll()
            .then( user => {
                return user.find(e => {
                    return data.email === e.email;
                });
            })
            .catch(e => {
                return e;
            })

        if(!user || user.password !== passwordHash){
            throw new Error('Invalid user NotFoundError');
        }

        const { name, email } = user;
        const token = jwtService.createToken({name, email});

        return token;
    },
}

module.exports = loginService;