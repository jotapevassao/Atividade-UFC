import express from 'express';
import { getAllChampions } from '../controllers/championController.js';

const championRoutes = express.Router();

championRoutes.get("/", getAllChampions);

export default championRoutes;