const mongoose = require('mongoose')

const ConversationSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    sellerId: {
        type: String,
        required: true
    },
    buyerId: {
        type: String,
        required: true
    },
    readBySeller: {
        type: Boolean,
        required: true
    },
    readByBuyer: {
        type: Boolean,
        required: true
    },
    lastMessage: {
        type: String,
        required: false
    },
    readBySeller: {
        type: Boolean,
        required: true
    },
}, {
    timestamps: true
})

const Conversation = mongoose.model('Conversation', ConversationSchema)