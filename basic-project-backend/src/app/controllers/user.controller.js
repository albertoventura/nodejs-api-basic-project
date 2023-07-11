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
            const response = await userService.create(name, email);
            if(response){
                return res.status(201).json(response);
            }
            return res.status(400).send(statusMessage.user.createdError);
        } catch(e) {
            return res.status(400).send(e);
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