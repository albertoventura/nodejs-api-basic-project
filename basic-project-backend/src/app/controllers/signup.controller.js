const signupService = require("../services/signup.service");
const userService = require("../services/user.service");
const signController = {
    singin: async (req, res) => {

    },
    signup: async (req, res) => {
        try {
            const { name, email, password } = req.body;
            var img;
            if(req.file){
                img = req.file.path;
            }
            const data = signupService.validateData({name, email, password, img});
            
            await userService.create(data)
                .then(user => {
            
                    res.status(200).json(user);
                })
                .catch(e => {
                    res.status(400).json(e);
                });
            
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = signController