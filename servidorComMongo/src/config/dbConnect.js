import mongoose from "mongoose";
import 'dotenv/config'

async function connectDB() {
    try {
        await mongoose.connect(process.env.URI);
        console.log('✅ Conexão iniciada com o MongoDB');
    } catch (error) {
        console.error('❌ Erro ao conectar com o MongoDB:', error.message);
    }

    return mongoose.connection;
}


export default connectDB;