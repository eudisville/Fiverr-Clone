const mongoose = require("mongoose")
const jwt = require('jsonwebtoken')
const cookies = require('cookie-parser')

const User = require("../models/userModel")

const deleteUser = async (req, res) => {
    await User.findByIdAndDelete(res.params.id)
    const token = req.cookies.accessToken
    if (!token) return res.status(401).send("Vous n'êtes pas authentifié");

    jwt.verify
}

module.exports = deleteUser