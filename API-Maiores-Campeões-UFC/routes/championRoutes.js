import express from 'express';
import { 
  getAllChampions, 
  getChampionById, 
  createChampion, 
  updateChampion, 
  deleteChampion 
} from '../controllers/championController.js';

const championRoutes = express.Router();

championRoutes.get("/", getAllChampions);

championRoutes.get("/:id", getChampionById);

championRoutes.post("/", createChampion);

championRoutes.put("/:id", updateChampion);

championRoutes.delete("/:id", deleteChampion);

export default championRoutes;