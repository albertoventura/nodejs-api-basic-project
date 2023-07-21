const userService = require('../services/user.service');
const statusMessage = require('../../constant/statusMessage');

const userController = {
    getAll: async (req, res) => {
        try {
            const response = await userService.getAll();
            return res.status(201).json(response);
        } catch(e) {
            return res.status(400).send(e);
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
            const { name, email } = req.body;
            //const response = await userService.create({name, email});
            await userService.create({name, email})
                .then( data => {
                    console.log('$$$$', data);
                    return res.status(201).json(data);
                })
                .catch( e =>{
                    return res.status(400).json(e);
                });
            /* if(response){
                console.log('$$$$', response);
                return res.status(201).json(response);
            }
            //return res.status(400).send(statusMessage.user.createdError);
            return res.status(400).json(response); */
        } catch(e) {
            return res.status(500).json(e);
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, email } = req.body;
            const response = await userService.update(id, name, email);
            
            if(response){
                return res.status(201).json(response);
            }
            return res.status(400).send(statusMessage.user.notfound);
        } catch(e) {
            return res.status(400).send(e);
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const response = await userService.delete(id);

            if(response){
                return res.status(201).json(response);
            }
            return res.status(400).send(statusMessage.user.notfound);
        } catch(e) {
            return res.status(400).send(e);
        }
    }
}

module.exports = userController;