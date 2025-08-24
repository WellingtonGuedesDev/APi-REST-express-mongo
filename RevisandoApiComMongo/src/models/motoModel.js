import mongoose from "mongoose";
import { montadoraSchema } from "./montadoraModel.js";

const MotoSchema = mongoose.Schema(
    {
        id: mongoose.Schema.Types.ObjectId,
        name: { type: String },
        montadora: montadoraSchema,
        ano: { type: String },
        modelo: { type: String },
        cor: { type: String }
    },
    { versionKey: false }
)

const Motos = mongoose.model("Motos", MotoSchema)

export default Motos;