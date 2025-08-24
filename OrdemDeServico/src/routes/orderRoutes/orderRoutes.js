import express from "express";
import OrdemController from "../../controllers/ordemController.js";

const orderRoutes = express.Router()


orderRoutes.get("/listOrders", OrdemController.listOrders)
orderRoutes.delete("/deleteOrder", OrdemController.deleteOrder)

orderRoutes.post("/registerCustomer", OrdemController.registerOrder);
orderRoutes.post("/updateOrder", OrdemController.updateOrder)

export default orderRoutes;