import express from "express"
import motoRoutes from "./motoRoutes.js"
import montadoraRoute from "./montadoraRoutes.js"

const route = (app) => {
    app.route("/").get((req, res) => {
        return res.send({message: "Api funcionando com sucesso"})
    })

    app.use(express.json(), motoRoutes)
    app.use(express.json(), montadoraRoute)
}

export default route;