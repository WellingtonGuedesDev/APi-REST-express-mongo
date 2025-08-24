import mongoose from "mongoose";

const ordemSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String,  maxLength: [ 50, "Descrição muito longa, max de 50 caracteres" ]},
        status: { type: String, enum: ["aberto", "em andamento", "concluido"], default: "aberto" },
        dateOpen: { type: Date, default: Date.now},
        dateClosed: { type: Date, default: null }
    },
    { versionKey: false }
)

const ordemModel = mongoose.model("ordemServico", ordemSchema)

export default ordemModel;