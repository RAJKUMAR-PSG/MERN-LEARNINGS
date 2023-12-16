const mongoose = require('mongoose')



// This part of the code is for database connectivity
mongoose.connect("mongodb+srv://raj:raj@cluster0.cfvhftj.mongodb.net/crud").then(() =>{
    console.log('Database connected..')
})
    