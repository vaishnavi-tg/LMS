import express from "express"
import { config } from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import router from "./routes/userRoutes.js"

config()

const app = express()

app.use(express.json())
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    Credentials: true
}))
app.use(cookieParser())

try {
    app.listen(process.env.PORT)
    console.log(`App listening on port ${process.env.PORT}`)
} catch (error) {
    console.log(error)
}

app.use("/api/v1/user",router)

export default app