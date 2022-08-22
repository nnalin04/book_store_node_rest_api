console.log("Hello")
const cors = require("cors")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const express = require("express")
const app = express()

dotenv.config()
app.use(express.json())

app.use(cors())
app.get("/", (req, res) => {
    res.status(200).send("Book Store API by Nishit Nalin Srivastava")
})

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_DB)
.then(() => {
    app.listen(PORT, () => {
        console.log("server started on port no. "+ PORT)
    })
}).catch((error) => {
    console.log(error)
})