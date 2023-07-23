const { Router } = require("express");
const router = Router();
const uploadFile = require("../middleware/multer");
const signupController = require("../controllers/signup.controller");

router.post('/', uploadFile.single("file"), signupController.signup);

module.exports = router;
