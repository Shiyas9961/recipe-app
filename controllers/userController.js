const usersModel = require('../models/authModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const createUser = async(req,res) => {
    const {username,email,password} = req.body
    try{
        const existedUser = await usersModel.findOne({username})
        if(existedUser){
            return res.status(401).json({message : "User already exist"})
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPasswod = await bcrypt.hash(password,salt)
        const user = await usersModel.create({
            username,
            email,
            password : hashedPasswod
        })
        return res.status(200).json(user)
    }catch(err){
        return res.status(400).json({message : err.message})
    }
}

const loginUser = async (req,res) => {
    const {username,password} = req.body
    try{
        const user = await usersModel.findOne({username})
        if(!user){
            return res.status(400).json({message:"User not found"})
        }
        const validPassword = await bcrypt.compare(password,user.password)
        if(!validPassword){
            return res.status(401).json({message:"Incurrect password"})
        }
        const token = jwt.sign({id : user._id},process.env.SECRET_KEY)
        res.cookie("token",token)
        return res.status(200).json({message : "User logged in",id : user._id})
    }catch(err){
        return res.status(400).json({message : err.message})
    }
}

const logoutUser = (req,res) => {
    try{
        res.clearCookie("token")
        res.status(200).json({message : "Logged out"})
    }catch(err){
        return res.status(400).json({message : err.message})  
    }
}

module.exports = {
    createUser,
    loginUser,
    logoutUser
}