const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

const User = require("../routes/user.routes")

const register = async (req, res) => {
    try {
        const hash = bcrypt.hash(req.body.password, 5)
        const newUser = new User({
            ...req.body,
            password: hash
        })

        await newUser.save()
        res.status(201).send("L'utilisateur a été crée")
    }
    catch (err) {
        res.status(500).send(`Erreur: ${err}`)
    }
}

const login = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        if(!user) return res.status(404).send("L'utilisateur n'a pas été trouvé !");
        
        const isCorrect = bcrypt.compareSync(req.body.password, user.password)
        if(!isCorrect) return res.status(400).send("Mauvais mot de passe ou nom d'utlisateur");
        
        const token = jwt.sign({
            id: user._id,
            isSeller: user.isSeller
        },
        process.env.JWT
    )

        const { password, ...info } = user._doc
        res.cookie("accessToken", token, {
            httpOnly: true
        }).status(200).send(info)
    }
    catch (err) {

    }
}

const logout = async (req, res) => {

}

module.exports = register, login, logout