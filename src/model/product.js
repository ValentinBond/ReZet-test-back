const axios = require('axios');
require('dotenv').config();

class ProductModel {

  async getAll() {
    const url = process.env.MOCK_API + 'product'
    try{
      const response = await axios({
        method: 'get',
        url
      });

      return response
    } catch(e) {
      throw(e);
    }
  }

}

module.exports = new ProductModel();