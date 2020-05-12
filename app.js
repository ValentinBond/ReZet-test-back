const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./src/route');
require('dotenv').config();

class App {
  constructor() {
    this.app = express();
    this._config();
  }

  static getInstance() {
    if (!App.instance) {
      App.instance = new App();
    }

    return App.instance;
  }


  _config() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cors());
    this.app.use('/', routes);
  }
}

module.exports = App.getInstance().app;
