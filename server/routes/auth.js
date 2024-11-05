const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

const JWT_SECRET = "secreta";

const authMiddleware = (roles = []) => {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ error: "Token não fornecido" });
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) {
        console.error("Erro ao verificar token:", err);
        return res.status(403).json({ error: "Token inválido" });
      }

      console.log("Usuário autenticado:", user);
      if (roles.length && !roles.includes(user.role)) {
        return res.status(403).json({ error: "Acesso negado" });
      }

      req.user = user;
      next();
    });
  };
};

router.post("/register", async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "E-mail já cadastrado" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userRole = role === "admin" ? "user" : role;

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      role: userRole,
    });

    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ token, role: user.role });
  } catch (error) {
    res.status(500).json({ error: "Erro ao cadastrar usuário" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Senha inválida" });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token, role: user.role });
  } catch (error) {
    res.status(500).json({ error: "Erro ao fazer login" });
  }
});

router.get("/me", authMiddleware(), async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: ["id", "username", "email", "role"],
    });

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar dados do usuário" });
  }
});

module.exports = router;