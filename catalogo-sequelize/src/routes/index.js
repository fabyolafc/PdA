const express = require('express');
const categorias = require('./categoriasRouter.js');
const produtos = require('./produtosRouter.js');

module.exports = app => {
  app.use(
    express.json(),
    categorias,
    produtos
  );
};
