const jwtService = require("../services/jwt.service");

const authMiddleware = (req, res, next) => {
    const { authorization } = req.headers;
    const jwt = jwtService.validateToken(authorization);
    res.authenticated = jwt;
    next();
};

module.exports = authMiddleware;