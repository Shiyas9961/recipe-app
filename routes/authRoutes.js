const router = require('express').Router()
const { createUser, loginUser,logoutUser } = require('../controllers/userController')

router.get('/register',(req,res)=>{
    res.send(`<h1>Register User</h1>`)
})

router.post('/register',createUser)
router.post('/login',loginUser)
router.get('/logout',logoutUser)

module.exports = router