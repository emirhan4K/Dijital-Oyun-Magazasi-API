const gameService = require("../services/game.service");

class GameController {
  async createGame(req, res) {
    const gameData  = req.body;
    try {
      const result = await gameService.gameCreate(gameData);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const games = await gameService.findAllGame();
      res.status(200).json(games);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getBySlug(req, res) {
    const {slug} = req.params;
    try {
      const result = await gameService.gameSearch(slug);
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

module.exports = new GameController();
