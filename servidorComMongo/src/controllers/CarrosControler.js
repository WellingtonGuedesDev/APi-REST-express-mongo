import Carros from "../models/Carros.js";

class CarrosController {
    static async CarrosFind(req, res) {
        const carros = await Carros.find({});
        return res.status(200).json(carros)
    }

    static async CarrosCreate(req, res) {
        console.log(req)
        try {
            const carroCreate = await Carros.create(req);
            console.log(req.body)
            return res.status(200).json({ message: "Carro criado com sucesso", carro: carroCreate })
        } catch (error) {
            return res.status(500).json({ message: "Erro ao criar o carro", Error:  `Erro ao cadastrar - ${error}`})
        }
    }
} 

export default CarrosController;