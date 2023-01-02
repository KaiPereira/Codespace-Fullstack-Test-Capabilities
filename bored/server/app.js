const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const env = require("dotenv/config")
app.use(cors())
app.use(express.json())

app.listen(process.env.PORT || 5000)

const chatRoute = require("./routes/chatRoutes.js")
app.use("/chat/", chatRoute)


mongoose.connect("mongodb+srv://kai:gQL5pGJ3BeVJCRvp@cluster0.uctlrdb.mongodb.net/?retryWrites=true&w=majority", (err) => {
    console.log(err)
})