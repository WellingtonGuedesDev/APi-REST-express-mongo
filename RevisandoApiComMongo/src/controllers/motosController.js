import Motos from "../models/motoModel.js";
import { montadoraModel } from "../models/montadoraModel.js";

class MotosController {
    static async todasMotos(req, res) {
        const motos = await Motos.find({});
        return res.status(200).json(motos);
    }

    static async criarMoto(req, res) {
        console.log("Novo registro criado")
        const novaMontadora = req.body

        try {
            const montadoraEncontrada = await montadoraModel.findById(novaMontadora.montadora)
            const montadoraCompleta = { ...novaMontadora, montadora: { ...montadoraEncontrada._doc }};
            const registro = await Motos.create(montadoraCompleta)
            return res.status(200).json({ message: "Moto criada com sucesso", dado: registro })
        } catch (error) {
            return res.status(500).json({ message: "Erro ao criar o carro", Error:  `Erro ao cadastrar - ${error}`})
        }
    }

    static async atualizarMoto(req, res) {
        const id = req.params.id
        try {
            const atualizarMoto = await Motos.findByIdAndUpdate(id, req.body)

            return res.status(200).json({ message: "Registro atualizado com sucesso"})
        } catch (error) {
            return res.status(500).json({ erro: "Erro ao atualizar registro" })
        }
    }

    static async deletarMoto(req, res) {
        const id = req.params.id
        console.log("id===", id)

        try {
            const deletar = await Motos.findByIdAndDelete(id)
            // console.log(deletar)

            return res.status(200).json({ message: "Registro deletado com sucesso" })
        } catch (error) {
            console.log(error)
            res.status(500).json({ erro: "Erro ao deletar registro" })
        }
    }

    static async buscarMotos(req, res) {
        const query = req.query.cor

        try {
            const buscaMontadora = await Motos.find({ cor: query })
            console.log(buscaMontadora)
            return res.status(200).json({ buscaMontadora })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "Erro ao fazer buscar" })
        }
    }
}

export default MotosController;