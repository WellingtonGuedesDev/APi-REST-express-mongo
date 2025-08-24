import express from "express";
import dotenv from 'dotenv'
import connectDB from "./config/dbconnect.js";

import routes from "./routes/index.js";

dotenv.config({ path: '.env' })

const app = express()
const PORT = process.env.PORT
routes(app)
connectDB()


app.listen(PORT, () => {
    console.log(`Servidor funcionado na porta: ${PORT}`)
})