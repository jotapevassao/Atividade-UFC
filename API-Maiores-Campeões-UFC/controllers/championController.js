import Champion from '../models/Champion.js';

export const getAllChampions = async (req, res) => {
  try {
    const champions = await Champion.find();
    
    // Mapeia os campeões adicionando a numeração amigável
    const formattedChampions = champions.map((champion, index) => ({
      id: `Lutador ${index + 1}`,
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