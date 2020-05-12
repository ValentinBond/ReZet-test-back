const { ProductModel } = require('@model');

class ProductController  {
  async getProductList(req, res) {
    try {
      const { data } = await ProductModel.getAll();

      return res.json({ products: data });
    } catch (err) {
      res.status(400).send(err);
    }
  }

  async orderProduct(req, res) {
    return res.json({
        message:  'Order success!'
    })
  }
}

module.exports = new ProductController();