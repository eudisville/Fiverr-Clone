const mongoose = require("mongoose")

const User = require("../models/userModel")

const deleteUser = async (req, res) => {
    await User.findByIdAndDelete(res.params.id)
}

module.exports = deleteUser