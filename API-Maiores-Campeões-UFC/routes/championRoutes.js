import express from 'express';
import { getAllChampions, createChampion } from '../controllers/championController.js';

const championRoutes = express.Router();

// Rota GET: /champions
championRoutes.get("/", getAllChampions);

// Rota POST: /champions
championRoutes.post("/", createChampion);

export default championRoutes;