import mongoose from 'mongoose';

const championSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nickname: { type: String },
  category: { type: String, required: true },
  country: { type: String },
  stats: {
    wins: { type: Number, default: 0 },
    losses: { type: Number, default: 0 },
    defenses: { type: Number, default: 0 }
  }
});

const Champion = mongoose.model('Champion', championSchema);

export default Champion;