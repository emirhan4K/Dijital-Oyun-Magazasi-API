const Review = require("../models/Review.model");

class ReviewRepository{
    async reviewCreate(userId,gameId,rating,comment){
        const add = await Review.create({
            userId,
            gameId,
            rating,
            comment
        });
        return add;
    }
    async getAllReview(gameId){
        const review = await Review.find({gameId}).populate("userId","name");
        return review;
    }
}

module.exports = new ReviewRepository();