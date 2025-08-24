import express from "express"
import connectDB from "./config/dbconnect.js"
import route from "./routes/index.js"

const app = express()
route(app)
connectDB()

app.get('/home', (req, res) => {
    return res.send("Home funfando")
})

app.listen(3000, () => {
    console.log("Servidor funcionando na porta 3000")
})