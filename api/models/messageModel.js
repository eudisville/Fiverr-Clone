const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
    conversationId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Message', MessageSchema)