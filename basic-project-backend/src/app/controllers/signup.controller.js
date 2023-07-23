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
            const data = signupService.validation({name, email, password, img});
            console.log('dadadada', data);
            await userService.create(data)
                .then(user => {
                    console.log('user created', user);
                    res.status(200).json(user);
                })
                .catch(e => {
                    res.status(400).json(e);
                });
            //res.json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = signController