const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    discription : {
        type : String,
    },
    ingredients : {
        type : String
    },
    imgUrl : {
        type : String
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users",
        required : true
    }
})


const recipeModel = mongoose.model("recipe",recipeSchema)

module.exports = recipeModel

