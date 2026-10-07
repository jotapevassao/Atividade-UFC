import Champion from '../models/Champion.js';

// Listar todos os campeões (GET)
export const getAllChampions = async (req, res) => {
  try {
    const champions = await Champion.find();
    
    const formattedChampions = champions.map((champion, index) => ({
      id: `Lutador ${index + 1}`,
      _id: champion._id,
      name: champion.name,
      nickname: champion.nickname,
      category: champion.category,
      country: champion.country,
      stats: champion.stats
    }));

    res.status(200).json(formattedChampions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Buscar um campeão por ID (GET /:id)
export const getChampionById = async (req, res) => {
  try {
    const champion = await Champion.findById(req.params.id);
    if (!champion) {
      return res.status(404).json({ message: "Campeão não encontrado!" });
    }
    res.status(200).json(champion);
  } catch (error) {
    res.status(400).json({ message: "ID inválido!" });
  }
};

// Criar um novo campeão (POST)
export const createChampion = async (req, res) => {
  try {
    const { name, nickname, category, country, wins, losses, defenses, stats } = req.body;

    const newChampion = new Champion({
      name,
      nickname,
      category,
      country,
      stats: {
        wins: stats?.wins ?? wins ?? 0,
        losses: stats?.losses ?? losses ?? 0,
        defenses: stats?.defenses ?? defenses ?? 0
      }
    });

    await newChampion.save();
    res.status(201).json(newChampion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Atualizar um campeão por ID (PUT /:id)
export const updateChampion = async (req, res) => {
  try {
    const updatedChampion = await Champion.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedChampion) {
      return res.status(404).json({ message: "Campeão não encontrado!" });
    }
    res.status(200).json(updatedChampion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar/Deletar um campeão por ID (DELETE /:id)
export const deleteChampion = async (req, res) => {
  try {
    const champion = await Champion.findByIdAndDelete(req.params.id);
    if (!champion) {
      return res.status(404).json({ message: "Campeão não encontrado!" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: "ID inválido!" });
  }
};