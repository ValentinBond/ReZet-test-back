const express = require('express');
const apiRoutes = require('./api');

class Routes {
  constructor() {
    this.router = express.Router();
    this._config();
  }

  _config() {
    this.router.use('/api', apiRoutes);
  }
}

module.exports = new Routes().router;