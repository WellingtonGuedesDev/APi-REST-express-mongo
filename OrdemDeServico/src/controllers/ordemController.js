import ordemModel from "../models/ordensDeServico/ordemModel.js";

class OrdemController {

    static async listOrders(req, res) {
        try {
            const ordersList = await ordemModel.find({})

            if (ordersList.length === 0) {
                return res.status(404).json({ message: "Não existe nenhuma ordem" })
            }

            return res.status(200).json({ message: "ok", orders: ordersList })
        } catch (error) {
            return res.status(500).json({ message: "Falha ao buscar ordems!" })
        }
    }

    static async registerOrder(req, res) {

        try {
            const orderData = req.body;
            const { name, description, status } = orderData;

            const order = await ordemModel.create({ name, description, status })

            if (!order) {
                return res.status(404).json({ message: "Ordem não encontrada!" });
            }

            return res.status(200).json({ message: "Cliente cadastrado!" })
        } catch (error) {
            console.log("falha")
            return res.status(500).json({ message: "Falha ao registrar cliente", error: error })
        }
    }

    static async updateOrder(req, res) {
        const { id, ...dataUpdate } = req.body
        const validateStatus = ["aberto", "em andamento", "concluido"]

        try {

            if (!validateStatus.includes(req.body.status)) {
                return res.status(400).json({ message: "Status invalido!" })
            }

            if (req.body.status === "concluido") {
                dataUpdate.dateClosed = new Date();
            }

            const updateOrder = await ordemModel.findByIdAndUpdate(id, dataUpdate)

            if (!updateOrder) {
                return res.status(404).json({ message: "Ordem não encontrada!" })
            }

            return res.status(200).json({ message: "Ordem atualizada com sucesso!" })
        } catch (error) {
            return res.status(500).json({ message: "Falha ao atualizar ordem", error })
        }
    }

    static async deleteOrder(req, res) {
        const id = req.body.id

        try {
            const order = await ordemModel.findByIdAndDelete(id);

            if (!order) {
                return res.status(404).json({ message: "Ordem não encontrada!" })
            }

            return res.status(200).json({ message: "Ordem deletada com sucesso" });
    
        } catch (error) {
            return res.status(500).json({ message: "Falha ao deletar ordem", error })
        }
    }
}

export default OrdemController;