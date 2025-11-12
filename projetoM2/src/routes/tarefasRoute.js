const {Router} = require('express');
const tarefasController = require('../controllers/TarefaController.js');

const tarefaController = new tarefasController();

const router = Router();

router.get('/tarefas', (req, res) => tarefaController.pegaTodos(req, res));
router.get('/tarefas/:id', (req, res) => tarefaController.pegaUmPorId(req, res));
router.post('/tarefas', (req, res) => tarefaController.criaNovo(req, res));
router.put('/tarefas/:id', (req, res) => tarefaController.atualiza(req, res));
router.patch('/tarefas/:id/status', (req, res) => tarefaController.atualizaStatus(req, res));
router.delete('/tarefas/:id', (req, res) => tarefaController.exclui(req, res));

module.exports = router;