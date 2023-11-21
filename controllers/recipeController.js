const recipeModel = require('../models/recipeModel')
const usersModel = require('../models/authModel')

const createRecipe = async (req,res) => {
    const {name,discription,ingredients,imgUrl,userId} = req.body
    try{
        const recipe = await recipeModel.create({
            name,
            discription,
            ingredients,
            imgUrl,
            userId
        })
        return res.status(200).json(recipe)
    }catch(err){
        return res.status(400).json({message : err.message})
    }
}

const getRecipe = async (req,res) => {
    try{
        const recipe = await recipeModel.find()
        return res.status(200).json(recipe)
    }catch(err){
        return res.status(400).json({message : err.message})
    }
}

const getOneRecipe = async (req,res) => {
    const { id } = req.params
    try{
        const recipe = await recipeModel.findById(id)
        return res.status(200).json(recipe)
    }catch(err){
        return res.status(400).json({message : err.message})
    }
}

const getSavedRecipe = async (req,res) => {
    const {id} = req.params
    try{
        const user = await usersModel.findById(id)
        return res.status(200).json(user)
    }catch(err){
        return res.status(400).json({message : err.message}) 
    }
}

const saveRecipes = async (req,res) => {
    const {userId,recipeId} = req.body
    try{
        const recipe = await recipeModel.findById(recipeId)
        const user = await usersModel.findById(userId)
        user.savedRecipe.push(recipe)
        await user.save()
        return res.status(200).json(user)
    }catch(err){
        return res.status(400).json({message : err.message}) 
    }
}

const savedItems = async (req,res) => {
    const {id} = req.params
    try{
        const user = await usersModel.findById(id)
        const recipe = await recipeModel.find({
            _id : {$in : user.savedRecipe}
        })
        res.status(200).json(recipe)
    }catch(err){
        res.status(401).json({message : err.message})
    }
}

module.exports = {
    createRecipe,
    getRecipe,
    getOneRecipe,
    getSavedRecipe,
    saveRecipes,
    savedItems
}