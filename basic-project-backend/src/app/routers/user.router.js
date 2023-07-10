/* const express = require('express');
const router = express.Router() */
const { Router } = require('express');
const router = Router();
const path = require('../../constant/path');
const userController = require('../controllers/user.controller');

/* module.exports = function(application){
    
    const router = application.express.Router();
    //console.log('@@@@', application);
    router.get('/', function(req, res){
        res.send('asd@@@@@@@@@@@@');
    })
} */

router.get(path.userPath.getAllUsers, userController.getAll);
router.get(path.userPath.getUserById, userController.getById);
router.post(path.userPath.createUser, userController.create);
router.put(path.userPath.updateUser, userController.update);
router.delete(path.userPath.deleteUser, userController.delete);

module.exports = router;