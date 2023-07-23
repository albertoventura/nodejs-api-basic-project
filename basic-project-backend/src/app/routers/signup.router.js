const { Router } = require("express");
const router = Router();
const signupController = require("../controllers/signup.controller");

router.post('/', signupController.signup);

module.exports = router;
