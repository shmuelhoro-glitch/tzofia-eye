import "dotenv/config"
import express,{ Router } from "express"
import cors from "cors"
import apiRouter from "./routes/api.route.js"


const app = express()
app.use(express.json())
app.use(cors())

app.use('/api', apiRouter)


app.listen(process.env.PORT, () => {
    console.log("The server is running and listening...")
})