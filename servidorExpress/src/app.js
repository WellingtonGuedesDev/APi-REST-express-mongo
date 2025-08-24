import express from "express"
import mockData from "./mockData.js"

const app = express()
app.use(express.json())

const data = {
    "personagens": []
}

app.get("/", (req, res) => {
    res.send("Express funfando")
})

app.get("/personagens", (req, res) => {
    res.status(200).json(data)
})

app.get('/produtos', (req, res) => {
    res.send("Pagina de produtos")
})

app.post("/criarPersonagem", (req, res) => {
    data.personagens.push(req.body)
    console.log(data.personagens)
    res.status(201).send("Personagem criado com sucesso");
})

app.listen(3000, () => {
    console.log("Servidor funcionando")
})

