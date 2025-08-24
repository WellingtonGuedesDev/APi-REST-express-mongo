import express from "express";
import CarrosController from "../controllers/CarrosControler.js";

const carrosRoutes = express.Router();

carrosRoutes.get("/carros", CarrosController.CarrosFind)
carrosRoutes.post("/criarCarro", CarrosController.CarrosCreate)

export default carrosRoutes;