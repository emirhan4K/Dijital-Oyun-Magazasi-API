const mongosee = require("mongoose");

const gameSchema = new mongosee.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    categories:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true,
        unique:true
    }
});

module.exports = mongosee.model("Game",gameSchema);