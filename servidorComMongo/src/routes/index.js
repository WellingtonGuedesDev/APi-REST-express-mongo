import express from "express";
import carrosRoutes from "./carrosRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => {
        return res.status(200).send("API funcionando com sucesso")
    })

    app.use(express.json(), carrosRoutes)
}

export default routes