const express = require("express")
const { getBook } = require("../controllers/bookControllers")
const bookRouter = express.Router()

bookRouter.get("/", getBook)

module.exports = bookRouter;