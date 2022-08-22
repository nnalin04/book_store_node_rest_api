const mongoose = require("mongoose")
const BookSchema = mongoose.Schema({
    id : {
        type : Number,
        required : true
    },
    author : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true
    }
})
module.exports = mongoose.model("Book", BookSchema)