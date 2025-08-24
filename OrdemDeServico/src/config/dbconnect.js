import mongoose from "mongoose";
import 'dotenv/config'

async function connectDB() {
    try {
        await mongoose.connect(process.env.URI)

        console.log("Conexão feita com sucesso com o banco de dados")
    } catch (error) {
        console.error('❌ Erro ao conectar com o MongoDB:', error.message);
    }

    return mongoose.connection
}

export default connectDB;