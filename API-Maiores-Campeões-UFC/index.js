import express from "express";
import mongoose from "mongoose";
import championRoutes from './routes/championRoutes.js';
import authRoutes from './routes/authRoutes.js'; // 1. Importa as rotas de autenticação

const app = express();

// Middleware para interpretar JSON
app.use(express.json());

// 2. Registra a rota para gerar o token no caminho /auth
app.use("/auth", authRoutes);

// Registra as rotas no caminho /champions
app.use("/champions", championRoutes);

// Conexão com o MongoDB Atlas
const mongoURI = "mongodb+srv://kauaroela180_db_user:kaua2006@cluster0.kivvbl8.mongodb.net/championsDB?retryWrites=true&w=majority";

mongoose.connect(mongoURI)
    .then(() => console.log("Conectado ao MongoDB Atlas com sucesso!"))
    .catch((err) => console.log("Erro ao conectar ao MongoDB: " + err));

const port = 4000;
app.listen(port, (error) => {
    if (error) {
        console.log("Ocorreu um erro ao iniciar a API: " + error);
    } else {
        console.log("API de Campeões do UFC iniciada com sucesso na porta " + port);
    }
});