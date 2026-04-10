const gameRepository = require("../repositories/game.repository");
const slugify = require("slugify");

class GameService {
  async gameCreate(gameData) {
    const slug = slugify(gameData.name, {
      lower: true,
      strict: true,
    });
    gameData.slug = slug;
    const createGame = await gameRepository.gameCreate(gameData);
    return createGame;
  }

  async findAllGame(){
    const gameAll = await gameRepository.findAllGame();
    return gameAll;
  }

  async gameSearch(slug){
    const slugGame = await gameRepository.gameSearch(slug);
    if(!slugGame){
        throw new Error("Böyle bir oyun bulunamadı!")
    }
    return slugGame;
  }

  async gameId(id){
    const game = await gameRepository.gameId(id);
    if(!game){
        throw new Error("Oyun bulunamadı!")
    }
    return game;
  }
}

module.exports = new GameService();
