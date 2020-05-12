const express = require('express');
const ProductRouter = require('./product');


class ApiRoutes {
  constructor() {
    this.router = express.Router();
    this._config();
  }

  _config() {
    this.router.use('/product', ProductRouter);
  }
}

module.exports = new ApiRoutes().router;