import express from 'express';
import { 
  getAllChampions, 
  getChampionById, 
  createChampion, 
  updateChampion, 
  deleteChampion 
} from '../controllers/championController.js';
// 1. Importa o middleware de autenticação
import { authenticateToken } from '../middlewares/authMiddleware.js';

const championRoutes = express.Router();

// Rotas públicas (qualquer um pode visualizar)
championRoutes.get("/", getAllChampions);
championRoutes.get("/:id", getChampionById);

// Rota protegida: apenas requisições com o token válido no cabeçalho conseguem criar
championRoutes.post("/", authenticateToken, createChampion);

// (Opcional) Se quiser proteger também a edição e eliminação:
championRoutes.put("/:id", authenticateToken, updateChampion);
championRoutes.delete("/:id", authenticateToken, deleteChampion);

export default championRoutes;