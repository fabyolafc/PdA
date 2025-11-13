import { Router } from "express";
import ProdutoController from "../controllers/ProdutoController.js";

const router = Router();
const produtoController = new ProdutoController();

router.get("/", (req, res) => produtoController.listarTodos(req, res));
router.get("/:id", (req, res) => produtoController.buscarPorId(req, res));
router.post("/", (req, res) => produtoController.criar(req, res));
router.put("/:id", (req, res) => produtoController.atualizar(req, res));
router.delete("/:id", (req, res) => produtoController.deletar(req, res));

export default router;
