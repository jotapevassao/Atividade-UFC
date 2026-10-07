import jwt from "jsonwebtoken";

// Chave secreta para assinar e validar o token (ideal manter em variável de ambiente .env)
export const SECRET_KEY = "minha_chave_secreta_super_segura";

export const authenticateToken = (req, res, next) => {
  // Pega o cabeçalho Authorization (ex: "Bearer <TOKEN>")
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Acesso negado. Token não fornecido." });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token inválido ou expirado." });
    }

    req.user = user; // Salva as informações do usuário na requisição
    next(); // Permite continuar para a controller da rota
  });
};