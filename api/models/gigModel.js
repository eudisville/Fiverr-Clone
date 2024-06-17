const mongoose = require('mongoose')

const GigSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    totalStars: {
        type: Number,
        default: 0,
    },
    starsNumber: {
        type: Number,
        default: 0,
    },
    cat: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    cover: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: false,
    },
    shortTitle: {
        type: String,
        required: true,
    },
    shortDesc: {
        type: String,
        required: true,
    },
    deliveryTime: {
        type: Number,
        required: true,
    },
    revsionNumber: {
        type: Number,
        required: true,
    },
    features: {
        type: [String],
        required: false,
    },
    sales: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true
})

const Gig = mongoose.model('Gig', GigSchema)