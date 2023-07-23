const joi = require("joi");
const md5 = require("md5");
const jwtService = require("./jwt.service");

const loginService = {
    validateBody: (data) => {
        const schema = joi.object({
            email: joi.string().email().required(),
            password: joi.string().required().min(6),
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
        const user = await mock.find( e => {
            return data.email === e.email;
        });

        if(!user || user.password !== passwordHash){
            throw new Error('Invalid user NotFoundError');
        }

        const { name, email } = user;
        const token = jwtService.createToken({name, email});

        return token;
    },
}

module.exports = loginService;

const mock = [
    { 
        name: 'João',
        email: 'joao@mail.com',
        password: '7cbb3252ba6b7e9c422fac5334d22054'
    },
];