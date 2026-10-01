// Importar o Express
import express from "express";
// Importar o Mongoose
import mongoose from "mongoose";
// Importar o Model do UFC
import Champion from "./models/Champion.js";
// Importar as rotas
import championRoutes from './routes/championRoutes.js';

// 1. Carregando e criando a aplicação Express
const app = express();

// 2. Configurações e Middlewares do Express
app.use(express.json());

// 3. Registrar as rotas (AGORA DEPOIS DE CRIAR O APP)
app.use("/champions", championRoutes);

// ROTA PRINCIPAL DA API (Retorna os Maiores Campeões do UFC)
app.get("/", (req, res) => {
    // JSON com dados dos campeões do UFC
    const champions = [
        {
            name: "Jon Jones",
            nickname: "Bones",
            category: "Meio-Pesado / Pesado",
            defenses: 11,
            wins: 27,
            losses: 1,
            country: "EUA"
        },
        {
            name: "Georges St-Pierre",
            nickname: "GSP",
            category: "Meio-Médio",
            defenses: 9,
            wins: 26,
            losses: 2,
            country: "Canadá"
        },
        {
            name: "Anderson Silva",
            nickname: "The Spider",
            category: "Médio",
            defenses: 10,
            wins: 34,
            losses: 11,
            country: "Brasil"
        },
        {
            name: "Amanda Nunes",
            nickname: "The Lioness",
            category: "Galo / Pena",
            defenses: 7,
            wins: 23,
            losses: 5,
            country: "Brasil"
        }
    ];

    // Configura o retorno da API
    res.status(200).json(champions);
});

// Iniciando a conexão com o MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/apiufc")
    .then(() => console.log("Conectado ao MongoDB com sucesso!"))
    .catch((err) => console.log("Erro ao conectar ao MongoDB: " + err));

// Iniciando o servidor da API
const port = 4000;
app.listen(port, (error) => {
    if (error) {
        console.log("Ocorreu um erro ao iniciar a API: " + error);
    } else {
        console.log("API de Campeões do UFC iniciada com sucesso na porta " + port);
    }
});