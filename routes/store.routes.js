const express = require("express");
const router = express.Router();
const storeController = require("../controllers/store.controller");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/store",authMiddleware,storeController.buy);

module.exports = router;


