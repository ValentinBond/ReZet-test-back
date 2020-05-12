const express = require('express');
const { ProductController } = require('@controller');
const { OrderValidator, bodyValidator } = require('@validator');

class ProductRoutes {
  constructor() {
    this.router = express.Router();
    this._config();
  }

  _config() {
    this.router.get('/', ProductController.getProductList);
    this.router.post('/order', bodyValidator(OrderValidator.order), ProductController.orderProduct);
  }
}

module.exports = new ProductRoutes().router;
