/* const express = require('express');
const router = express.Router() */
const { Router } = require('express');
const router = Router();
const path = require('../../constant/path');
const uploadFile = require("../middleware/multer");
const userController = require('../controllers/user.controller');


router.get(path.user.getAllUsers, userController.getAll);
router.get(path.user.getUserById, userController.getById);
router.post(path.user.createUser, uploadFile.single("file"), userController.create);
router.put(path.user.updateUser, uploadFile.single("file"), userController.update);
router.delete(path.user.deleteUser, userController.delete);

module.exports = router;