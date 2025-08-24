import express from "express"
import MontadoraController from "../controllers/montadoraController.js"

const montadoraRoute = express.Router()

montadoraRoute.get("/todasMontadoras", MontadoraController.todasMontadoras)
montadoraRoute.post("/criarMontadora", MontadoraController.criarMontadora)
montadoraRoute.put("/atualizarMontadora/:id", MontadoraController.atualizarMontadora)
montadoraRoute.delete("/deletarMontadora/:id", MontadoraController.deletarMontadora)

export default montadoraRoute;