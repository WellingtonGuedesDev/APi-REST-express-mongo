import mongoose from "mongoose";

const montadoraSchema = mongoose.Schema(
    {
        id: mongoose.Schema.Types.ObjectId,
        name: { type: String },
    },
    { versionKey: false }
)

const montadoraModel = mongoose.model("montadora", montadoraSchema)

export { montadoraModel, montadoraSchema }