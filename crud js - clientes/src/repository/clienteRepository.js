require("dotenv").config();
const { Pool } = require("pg");

async function connect() {
  if (global.connection) return global.connection;

  const pool = new Pool({
    connectionString: process.env.CONNECTION_STRING,
  });

  const client = await pool.connect();
  console.log("✅ Connected to the database");

  const res = await client.query("SELECT NOW()");
  console.log("Database time:", res.rows[0]);
  client.release();

  global.connection = pool;
  return pool;
}

async function selectCustomers() {
  const client = await connect();
  const res = await client.query("SELECT * FROM clientes");
  return res.rows;
}

async function insertCustomer(customer) {
  const client = await connect();
  const sql = "INSERT INTO clientes (nome, idade, uf) VALUES ($1, $2, $3)";
  await client.query(sql, [customer.nome, customer.idade, customer.uf]);
}

async function selectCustomerById(id) {
  const client = await connect();
  const res = await client.query("SELECT * FROM clientes WHERE id = $1", [id]);
  return res.rows[0];
}

async function updateCustomer(id, customer) {
  const client = await connect();
  const sql =
    "UPDATE clientes SET nome = $1, idade = $2, uf = $3 WHERE id = $4";
  await client.query(sql, [customer.nome, customer.idade, customer.uf, id]);
}

async function deleteCustomer(id) {
  const client = await connect();
  const sql = "DELETE FROM clientes WHERE id = $1";
  await client.query(sql, [id]);
}

module.exports = {
  selectCustomers,
  insertCustomer,
  updateCustomer,
  deleteCustomer,
  selectCustomerById,
};
