const reviewRepository = require("../repositories/review.repository");
const userRepository = require("../repositories/user.repository");

class ReviewService{
    async addReview(userId,gameId,rating,comment){
        if(rating < 1 || rating > 5){
            throw new Error("Puan 1 ile 5 arasında olmalıdır!")
        }
        const user = await userRepository.findById(userId)
        if(!user.library.some((id)=> id.toString() === gameId.toString())){
            throw new Error("Sadece satın aldığınız oyunlara yorum yapabilirsiniz!")
        }
        const saveReview = await reviewRepository.reviewCreate(userId, gameId, rating, comment)
        return saveReview;
    }

    async getGameReviews(gameId){
        const gameReview = await reviewRepository.getAllReview(gameId);
        return gameReview;
    }
}

module.exports = new ReviewService();