const Game = require("../models/Game.model");

class GameRepository{
    async gameCreate(gameData){
        const newGame = await Game.create(gameData);
        return {newGame};
    }

    async findAllGame(){
        const game = await Game.find();
        return game;
    }

    async gameSearch(slug){
        const game = await Game.findOne({slug});
        return game;
    }

    async getById(id){
        const game = await Game.findById(id);
        return game;
    }
}

module.exports = new GameRepository();