const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const User = require("../models/userModel")

// Inscrire un utilisateur
exports.register = async (req, res) => {
    const { username, email, password, country } = req.body

    try {
        const hashedPassword = await bcrypt.hash(password, 5)
        const user = new User({
            username,
            email,
            password: hashedPassword, 
            country
        })
        await user.save()
        res.status(201).send('Utilisateur créé avec succès')
    }
    catch (err) {
        res.status(400).send("Inscription invalide")
    }
}

// Connecter un utilisateur
exports.login = async (req, res) => {
    const { username, password } = req.body

    try {
        const user = await User.findOne({ username }) 

        if(!user) return res.status(400).send("L'utilisateur n'a pas été trouvé!");

        const isCorrect = await bcrypt.compare(password, user.password)

        if(!isCorrect) return res.status(404).send("Mot de passe ou nom d'utilisateur invalide!");

        const token = jwt.sign({ userId: user._id }, secret, { expiresIn: "1h" })
        res.json({ token })
    }
    catch(err) {
        res.status(400).send(`Erreur : ${err}`)
    }
}

// Deconnecter un utilisateur
exports.logout = async (req, res) => {

}

// Verification du token
exports.verifyToken = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ error: 'Access denied' });
    }

    try {
        const verified = jwt.verify(token, secret);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ error: 'Invalid token' });
    }
};