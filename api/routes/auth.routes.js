const express = require("express")
const authController = require("../controllers/authControllers")

const router = express.Router()

router.post("/register", authController.register)
router.post("/login", authController.login)
router.post("/logout", authController.logout)

// Route protégée par le token
router.get('/protected', authController.verifyToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router