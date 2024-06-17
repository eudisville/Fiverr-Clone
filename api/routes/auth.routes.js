const express = require('express')
const authControllers = require("../controllers/authControllers")

const router = express.Router()

router.post("/register", authControllers)
router.post("/login")
router.post("/logout")

module.exports = router