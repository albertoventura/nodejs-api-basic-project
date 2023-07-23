const userService = require('../services/user.service');
const statusMessage = require('../../constant/statusMessage');

const userController = {
    getAll: async (req, res) => {
        const userAuth = res.authenticated;
        console.log('auth data', userAuth);
        try {
            await userService.getAll()
                .then( users => {
                    return res.status(201).json(users);
                })
                .catch( err => {
                    return res.status(400).json(err);
                });
        } catch(e) {
            return res.status(500).send(e);
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const response = await userService.getById(id);
            
            if (response){
                return res.status(201).json(response);
            }
        } catch(e) {
            return res.status(400).send(statusMessage.user.notfound);
        }
    },
    create: async (req, res) => {
        try {
            const { name, email, password } = req.body;
            let img;

            if(req.file){
                img = req.file.path
            }

            await userService.create({name, email, password, img})
                .then( data => {
                    return res.status(201).json(data);
                })
                .catch( e =>{
                    return res.status(400).json(e);
                });
        } catch(e) {
            return res.status(500).json(e);
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, email, password} = req.body;
            let img;
            if(req.file){
                img = req.file.path
            }
            const response = await userService.update({id, name, email, password, img});
            
            if(response){
                return res.status(201).json(response);
            }
            return res.status(400).send(statusMessage.user.notfound);
        } catch(e) {
            return res.status(500).send(e);
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const response = await userService.delete(id)
                .then(data => {
                    return res.status(201).json(data);
                })
                .catch( e => {
                    return res.status(400).json(e);
                });

        } catch(e) {
            return res.status(500).send(e);
        }
    }
}

module.exports = userController;