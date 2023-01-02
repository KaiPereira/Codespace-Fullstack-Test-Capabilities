const express = require("express")
const router = express.Router()
const MessageSchema = require("../models/messageModel")


router.get("/test", async (req, res) => {
    try {
        res.send("Hello World")
    } catch (err) {
        res.send(err)
    }
})

router.post("/message", async (req, res) => {
    const newMessage = new MessageSchema({
        message: req.body.message
    })

    const save = await newMessage.save()

    try {
        res.send(save)
    } catch (err) {
        res.send(err)
    }
})

module.exports = router