const userService = require("../services/user.service");

class UserController{
    async register(req,res){
        const {name,email,password} = req.body;
        try {
            const response = await userService.register(name,email,password);
            res.status(201).json(response)
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }

    async login(req,res){
        const {email,password} = req.body;
        try {
            const response = await userService.login(email,password);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }
}

module.exports = new UserController();