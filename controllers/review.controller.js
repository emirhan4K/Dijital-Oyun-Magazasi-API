const reviewService = require("../services/review.service");

class ReviewController{
    async createReview(req,res){
        const {userId} = req.user.userId;
        const {gameId,rating,comment} = req.body;
        try {
            const result = await reviewService.addReview(userId,gameId,rating,comment);
            res.status(201).json(result);
        } catch (error) {
            res.status(400).json({message:error.message})
        }
    }

    async getByName(req,res){
        const {gameId} = req.params;
        try {
            const result = await reviewService.getGameReviews(gameId);
            res.status(201).json(result);
        } catch (error) {
            res.status(400).json({message:error.message})
        }
    }
}

module.exports = new ReviewController();