import Champion from "../models/Champion.js";

// Listar todos os campeões
export const getAllChampions = async (req, res) => {
  try {
    const champions = await Champion.find();
    res.status(200).json(champions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Criar um novo campeão
export const createChampion = async (req, res) => {
  try {
    const { name, nickname, category, defenses, wins, losses, country } = req.body;
    
    const newChampion = await Champion.create({
      name,
      nickname,
      category,
      defenses,
      wins,
      losses,
      country
    });

    res.status(201).json(newChampion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Buscar campeão por ID
export const getChampionById = async (req, res) => {
  try {
    const champion = await Champion.findById(req.params.id);
    if (!champion) return res.status(404).json({ message: "Campeão não encontrado" });
    res.status(200).json(champion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};