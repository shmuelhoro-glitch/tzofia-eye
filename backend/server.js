import "dotenv/config"
import express from "express"
import cors from "cors"
import alertsRouter from "./routes/alerts.route.js"
import { errorHandler } from "./middleware/error.middle.js"
import authRouter from "./routes/auth.route.js"


const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/alerts', alertsRouter)

app.use('/api/auth', authRouter)

app.use('/', (req, res) => {
    req.headers.authorization
    res.status(404).send("Page not found")
})

app.use(errorHandler)

app.listen(process.env.PORT, () => {
    console.log(`The server is running on port ${process.env.PORT} and listening...`)
})