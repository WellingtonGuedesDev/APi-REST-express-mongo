import mongoose from "mongoose";

const CarSchema = new mongoose.Schema(
    {
        id: mongoose.Schema.Types.ObjectId,
        name: { type: String},
        montadora: { type: String},
        ano: { type: String},
        montadora: { type: String }
    },
    { versionKey: false }
)

const Carros = mongoose.model("Carros", CarSchema)

export default Carros