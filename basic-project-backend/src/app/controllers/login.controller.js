const loginService = require("../services/login.service");

const loginController = {
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            console.log('body', {email, password});
            const data = loginService.validateBody({email, password});
            console.log('data', data);
            const result = await loginService.login(data);
            console.log('result', result);
            if(result){
                console.log('@@@@@@@@@@@@@');
                res.status(200).json(result)
            }
            //res.status(400).json('error')
        } catch (error) {
            res.status(500).json(error)
        }        
    }
}

module.exports = loginController;