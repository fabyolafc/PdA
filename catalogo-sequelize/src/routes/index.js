const express = require('express');
const categorias = require('./categoriasRouter.js');

module.exports = app => {
  app.use(
    express.json(),
    categorias,
  );
};
