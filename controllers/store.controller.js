const storeService = require("../services/store.service");

class StoreController{
    async buy(req,res){
        const {userId} = req.user.id;
        const {gameId} = req.body;
        try {
            const result = await storeService.buyGame(userId,gameId);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({message: error.message});   
        }
    }
}

module.exports = new StoreController();