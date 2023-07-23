const loginService = require("../services/login.service");

const loginController = {
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const data = loginService.validateData({email, password});
            const result = await loginService.login(data);
            if(result){
                res.status(200).json(result)
            }
            //res.status(400).json('error')
        } catch (error) {
            res.status(500).json(error)
        }        
    }
}

module.exports = loginController;