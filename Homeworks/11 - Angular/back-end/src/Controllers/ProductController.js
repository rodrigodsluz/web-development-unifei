const Product = require("../Models/Product");

module.exports = {
  async getAllProducts(req, res) {
    try {
      const products = await Product.find();

      if (products.length == 0)
        return res.json({
          message: "Não há produtos",
        });

      return res.json(products);
    } catch (e) {
      console.log("Error:" + e);
    }
  },
};
