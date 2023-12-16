const mongoose = require('mongoose')



// This is the schema of our collection like what we did in mysql for table
const PhoneBookSchema = new mongoose.Schema({
    id :{
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    }
})
const PhoneBook = mongoose.model('PhoneBook',PhoneBookSchema)
module.exports = PhoneBook
