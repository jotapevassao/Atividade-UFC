import mongoose from "mongoose";

const championSchema = new mongoose.Schema({
    name: { type: String, required: true },
    nickname: { type: String },
    category: { type: String, required: true },
    defenses: { type: Number, default: 0 },
    wins: { type: Number },
    losses: { type: Number },
    country: { type: String }
});

const Champion = mongoose.model("Champion", championSchema);

// Esta linha resolve o erro do export named 'default'
export default Champion;