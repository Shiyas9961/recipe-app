const mongoose = require('mongoose')

const DB_Connect = () => {
    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log('DB is connected successfully')
    }).catch(err=>{
        console.log(err.message)
    })
}

module.exports = DB_Connect