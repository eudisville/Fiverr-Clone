const express = require('express')
const deleteUser = require("../controllers/userControllers")

const router = express.Router()

router.get("/delete/:id", deleteUser)

module.exports = router