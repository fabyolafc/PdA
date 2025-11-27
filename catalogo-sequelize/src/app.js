const express = require('express');
const logger = require('./middleware/logger.js');
const routes = require('./routes');

const app = express();
app.use(logger);
routes(app);

module.exports = app;
