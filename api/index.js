const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

// Imports des routes 
const auth = require("./routes/auth.routes")
const user = require("./routes/user.routes")
const gig = require("./routes/gig.routes")
const review = require("./routes/review.routes")
const order = require("./routes/order.routes")
const conversation = require("./routes/conversation.routes")
const message = require("./routes/message.routes")

// Middlewares
app.use(bodyParser.json())
app.use(cors())

// Utilisation des routes
app.use("/api/auth", auth)
app.use("/api/user", user)
app.use("/api/gig", gig)
app.use("/api/review", review)
app.use("/api/order", order)
app.use("/api/conversation", conversation)
app.use("/api/message", message)

// DB Config (MongoDB)
try {
    mongoose.connect(process.env.MONGO)
    .then(() => console.log("Mongo connecté"))
    .catch(err => console.error(`Erreur de connexion à MongoDB : ${err}`))
    
}
catch (err) {
    res.status(400).send(`Erreur: ${err}`)
}

// Ecoute du serveur
const PORT = process.env.PORT || 3008
app.listen(PORT, () => console.log(`Le server est en écoute sur le port ${PORT}`))