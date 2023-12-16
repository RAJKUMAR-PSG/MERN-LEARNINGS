const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const PORT = 8080

require('../backend/dbconnection/db')





//This part of the code for run the server
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...   `)
})

// this code is for router connection for api calls 
const route=require("../backend/routes/router")
app.use(route)
