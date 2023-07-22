/* const express = require('express');
const router = express.Router() */
const { Router } = require('express');
const router = Router();
const path = require('../../constant/path');
const uploadFile = require("../middleware/multer");
const userController = require('../controllers/user.controller');

const authMiddleware = require("../middleware/auth.middleware");

/* module.exports = function(application){
    
    const router = application.express.Router();
    //console.log('@@@@', application);
    router.get('/', function(req, res){
        res.send('asd@@@@@@@@@@@@');
    })
} */

router.get(path.userPath.getAllUsers, authMiddleware, userController.getAll);
router.get(path.userPath.getUserById, userController.getById);
router.post(path.userPath.createUser, uploadFile.single("file"), userController.create);
router.put(path.userPath.updateUser, userController.update);
router.delete(path.userPath.deleteUser, userController.delete);

module.exports = router;