import express from "express"
import 'dotenv/config'
import connectDB from "./config/dbConnect.js"
import routes from "./routes/index.js"


const PORT = 3000
const app = express()
routes(app)
const dbConnect = await connectDB()

app.listen(PORT, () => {
    console.log("Servidor funcionando na porta: ", PORT)
})