const mongoose = require("mongoose")

const messageSchema = mongoose.Schema({
    message: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("MessageSchema", messageSchema)