const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/review.controller");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/create",authMiddleware,reviewController.createReview);
router.get("/:gameId",reviewController.getByName);

module.exports = router;

