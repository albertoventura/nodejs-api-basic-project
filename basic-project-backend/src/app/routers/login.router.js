const { Router } = require("express");
const router = Router();
const loginController = require("../controllers/login.controller");

router.post('/', loginController.login);

module.exports = router;