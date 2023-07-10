
const userController = {
    getAll: async (req, res) => {
        res.send('get all subject@');
    },
    getById: async (req, res) => {
        res.send('get id subject@');
    },
    create: async (req, res) => {
        res.send('create subject@');
    },
    update: async (req, res) => {
        res.send('update subject@');
    },
    delete: async (req, res) => {
        res.send('delete subject@');
    }
}

module.exports = userController;