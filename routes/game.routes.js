const express = require("express");
const router = express.Router();
const gameController = require("../controllers/game.controller");

router.post('/create',gameController.createGame);
router.get('/:slug',gameController.getBySlug);
router.get('/',gameController.getAll);

module.exports = router;