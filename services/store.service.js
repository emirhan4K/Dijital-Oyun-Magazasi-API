const userRepository = require("../repositories/user.repository");
const gameRepository = require("../repositories/game.repository");

class StoreService{
    async buyGame(userId,gameId){
        const user = await userRepository.findById(userId);
        if(!user){
            throw new Error("Kullanıcı bulunamadı!")
        }

        const game = await gameRepository.getById(gameId);
        if(!game){
            throw new Error("Oyun bulunamadı!")
        }

        if(user.library.some((id) => id.toString() === gameId.toString())){
            throw new Error("Bu oyuna zaten sahipsiniz!")
        }
       const result = await userRepository.gameLibraryAdd(userId, gameId)
       return result;
    }
}

module.exports = new StoreService();