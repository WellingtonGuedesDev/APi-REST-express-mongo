import { montadoraModel } from "../models/montadoraModel.js";

class MontadoraController {
    static async todasMontadoras(req, res) {
        const montadora = await montadoraModel.find({});
        return res.status(200).json(montadora);
    }

    static async criarMontadora(req, res) {
        console.log("Novo registro criado", req.body)
    
        try {
            const criarMontadora = await montadoraModel.create(req.body)
            return res.status(200).json({ message: "Registro criado com sucesso", dado: criarMontadora })
        } catch (error) {
            return res.status(500).json({ message: "Erro ao criar o Registro", Error:  `Erro ao cadastrar - ${error}`})
        }
    }

    static async atualizarMontadora(req, res) {
        const id = req.params.id
        try {
            const atualizarMontadora = await montadoraModel.findByIdAndUpdate(id, req.body)

            return res.status(200).json({ message: "Registro atualizado com sucesso"})
        } catch (error) {
            return res.status(500).json({ erro: "Erro ao atualizar registro" })
        }
    }

    static async deletarMontadora(req, res) {
        const id = req.params.id;
        console.log(id)

        try {
            const deletar = await montadoraModel.findByIdAndDelete(id)
            // console.log(deletar)

            return res.status(200).json({ message: "Registro deletado com sucesso" })
        } catch (error) {
            // console.log(error)
            res.status(500).json({ erro: "Erro ao deletar registro" })
        }
    }
}

export default MontadoraController;