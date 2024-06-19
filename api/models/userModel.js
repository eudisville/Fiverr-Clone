const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        unique: true
    },
    username : {
        type: String,
        required: true,
        unique: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true,
    },
    img : {
        type: String,
        required: false,
    },
    description : {
        type: String,
        required: false,
    },
    phone : {
        type: String,
        required: false,
    },
    country : {
        type: String,
        required: true,
    },
    isSeller : {
        type: String,
        default: false
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema)