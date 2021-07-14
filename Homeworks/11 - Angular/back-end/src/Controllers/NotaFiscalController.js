const Product = require("../Models/Product");
const NotaFiscal = require("../Models/NotaFiscal");

module.exports = {
  async addProduct(req, res) {
    try {
      const { _id, amount } = req.body;

      if (!_id || !amount) {
        return res.status(400).json({
          error: "Erro",
        });
      }

      let product = await Product.findOne({ _id });

      if (!product) {
        return res.status(400).json({ error: "Producto não encontrado" });
      }

      let notaFiscal = await NotaFiscal.create({ product, amount });

      return res.json(notaFiscal);
    } catch (e) {
      console.warn("Error:" + e);
    }
  },

  async showNotaFiscal(req, res) {
    try {
      const products = await NotaFiscal.find();

      if (products.length === 0)
        return res.json({
          message: "Não existe produto",
        });

      return res.json(products);
    } catch (e) {
      console.log("Error:" + e);
    }
  },
};
