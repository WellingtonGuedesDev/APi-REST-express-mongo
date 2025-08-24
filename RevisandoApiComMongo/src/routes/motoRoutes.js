import express from "express"
import MotosController from "../controllers/motosController.js"

const motoRoutes = express.Router()

motoRoutes.get("/motos", MotosController.todasMotos)
motoRoutes.get("/motos/buscar", MotosController.buscarMotos)
motoRoutes.post("/criarMoto", MotosController.criarMoto)
motoRoutes.put("/atualizarMoto/:id", MotosController.atualizarMoto)
motoRoutes.delete("/deletarMoto/:id", MotosController.deletarMoto)

export default motoRoutes;