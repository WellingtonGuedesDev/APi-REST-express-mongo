import express from "express";
import ordemRoutes from "./orderRoutes/orderRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).json({ message: "API funcionando" })
    })

    app.use(express.json(), ordemRoutes)
}

export default routes;