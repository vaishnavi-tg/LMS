import mongoose from "mongoose";
import { config } from "dotenv";

config()

const dbConnect = () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to LMS DB")
    } catch (error) {
        console.log(error)
    }
}

export { dbConnect }