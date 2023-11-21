const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const DB_Connect = require('./config/db')
const authRouter = require('./routes/authRoutes')
const recieRouter = require('./routes/recipeRouter')
const cookieParser = require('cookie-parser')


app.use(cors({
    origin : ["https://recipe-app-client-uxmq.onrender.com"],
    methods : ["GET","POST","PUT","DELETE"],
    credentials : true
}))
app.use(express.json())
app.use(cookieParser())

app.use('/auth',authRouter)
app.use('/recipe',recieRouter)

const PORT = process.env.PORT
DB_Connect()
app.listen(PORT,()=>console.log(`server is running at PORT no.${PORT}`))

