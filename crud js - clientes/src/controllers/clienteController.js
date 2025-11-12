const db = require("../repository/clienteRepository");

exports.listarClientes = async (req, res) => {
  try {
    const clientes = await db.selectCustomers();
    res.json(clientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar clientes" });
  }
};

exports.buscarClientePorId = async (req, res) => {
  try {
    const id = req.params.id;
    const cliente = await db.selectCustomerById(id);
    res.json(cliente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar cliente" });
  }
};

exports.criarCliente = async (req, res) => {
  try {
    await db.insertCustomer(req.body);
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao inserir cliente" });
  }
};

exports.atualizarCliente = async (req, res) => {
  try {
    await db.updateCustomer(req.params.id, req.body);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao atualizar cliente" });
  }
};

exports.deletarCliente = async (req, res) => {
  try {
    await db.deleteCustomer(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao deletar cliente" });
  }
};
