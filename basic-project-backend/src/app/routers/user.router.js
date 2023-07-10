/* const express = require('express');
const router = express.Router() */
const { Router } = require('express');
const router = Router();
const path = require('../../constant/path');

/* module.exports = function(application){
    
    const router = application.express.Router();
    //console.log('@@@@', application);
    router.get('/', function(req, res){
        res.send('asd@@@@@@@@@@@@');
    })
} */

router.get(path.userPath.getAllUsers, (req, res) => {
    res.send('get all subject');
});
router.get(path.userPath.getUserById, (req, res) => {
    res.send('get by id subject');
});
router.post(path.userPath.createUser, (req, res) => {
    res.send('post subject');
});
router.put(path.userPath.updateUser, (req, res) => {
    res.send('put subject');
});
router.delete(path.userPath.deleteUser, (req, res) => {
    res.send('delete subject');
});

module.exports = router;