const { createRecipe, getRecipe, getOneRecipe,getSavedRecipe, saveRecipes, savedItems } = require('../controllers/recipeController')
const router = require('express').Router()

router.post('/create',createRecipe)
router.get('/',getRecipe)
router.get('/:id',getOneRecipe)
router.get('/saved/:id',getSavedRecipe)
router.put('/',saveRecipes)
router.get('/savedRecipe/:id',savedItems)

module.exports = router