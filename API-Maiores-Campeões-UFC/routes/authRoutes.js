import express from "express";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../middlewares/authMiddleware.js";

const router = express.Router();


router.post("/login", (req, res) => {
  const { username, password } = req.body;

 
  if (username === "admin" && password === "123456") {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
    return res.json({ token });
  }

  return res.status(401).json({ message: "Usuário ou senha inválidos." });
});

export default router;