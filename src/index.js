console.log("Hello")
const bookRoutes = require("./router/bookRoutes")
const cors = require("cors")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const express = require("express")
const app = express()

dotenv.config()
app.use(express.json())

app.use(cors())
app.get("/", (req, res) => {
    res.status(200).send("Book Store Rest API by Nishit Nalin Srivastava")
})
app.use("/book", bookRoutes)

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_DB)
.then(() => {
    app.listen(PORT, () => {
        console.log("server started on port no. "+ PORT)
    })
}).catch((error) => {
    console.log(error)
})