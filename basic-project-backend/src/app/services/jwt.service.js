const jwt = require("jsonwebtoken");

require("dotenv").config();

const secretKey = process.env.SECRETKEY;
const config = { expiresIn: "7d", algorithm: "HS256"};

const jwtService = {
    createToken: (data) => {
        const token = jwt.sign({ ...data}, secretKey, config);
        return token;
    },
    validateToken: (token) => {
        if(!token){
            throw new Error('F');
        }
        try {
            const data = jwt.verify(token, secretKey);
            return data;
        } catch (error) {
            throw new Error('F2');
        }
    }
}

module.exports = jwtService;