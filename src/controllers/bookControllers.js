const bookModel = require("../models/book")

const getBook = async (req, res) => {
    try {
        const notes = await bookModel.find()
        res.status(200).json(notes)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message : "Somethig went wrong"})
    }
}

module.exports = {getBook}