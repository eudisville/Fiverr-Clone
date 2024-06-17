const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
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
    country : {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', UserSchema)