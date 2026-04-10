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
    
  }

}
