const mongoose = require('mongoose')

const userScheme = new mongoose.Schema({
    username : {
        required : true,
        type : String,
        unique : true
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        required : true,
        type : String,
        minlen : 3
    },
    savedRecipe : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "recipe"
    }]
})

const usersModel = mongoose.model('users',userScheme)

module.exports = usersModel