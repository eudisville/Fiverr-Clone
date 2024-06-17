const express = require("express")
const mongoose = require("mongoose")

// Imports des routes 
const authRoutes = require('./routes/auth.routes')
const userRoutes = require('./routes/user.routes')
const gigRoutes = require("./routes/gig.routes")
const conversationRoutes = require("./routes/conversation.routes")
const messageRoutes = require("./routes/message.routes")
const orderRoutes = require("./routes/order.routes")
const reviewRoutes = require("./routes/review.routes")

const app = express()

// MongoDB config
mongoose.set('strictQuery', true)

mongoose.connect('mongodb+srv://eudisville:50G2OK@cluster35.wu2xhof.mongodb.net/')
.then(() => console.log('MongoDB connecté'))
.catch((err) => console.log(`Erreur ${err}`))

app.use(express.json())

// Utilisation des routes
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/gig', gigRoutes)
app.use('/api/conversation ', conversationRoutes)
app.use('/api/message', messageRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/review', reviewRoutes)

const PORT = process.env.PORT || 3008
app.listen(PORT, () => console.log(`Le server est en écoute sur le port ${PORT}`))