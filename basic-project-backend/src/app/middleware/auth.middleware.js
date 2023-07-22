const jwtService = require("../services/jwt.service");

const authMiddleware = (req, res, next) => {
    console.log("head", req.headers);
    const { authorization } = req.headers;
    const jwt = jwtService.validateToken(authorization);
    console.log("jwt", jwt);
    res.authenticated = jwt;
    next();
};

module.exports = authMiddleware;