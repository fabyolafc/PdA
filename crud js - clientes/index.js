require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const clienteRouter = require("./src/routes/clienteRouter");
const verifyToken = require("./src/middleware/authMiddleware");

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

// Rota inicial
app.get("/", (req, res) => {
  res.json({ message: "API is running 🚀" });
});

// Fazer login
app.post("/login", (req, res) => {
  const { username } = req.body;
  const token = jwt.sign({ username }, "key");
  res.json({ token });
});

// Rotas protegidas de clientes
app.use("/clientes", verifyToken, clienteRouter);

app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
