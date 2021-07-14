const mongoose = require("mongoose");

const NotaFiscalSchema = new mongoose.Schema({
  product: { type: Array, required: true },
  amount: { type: Number, required: true },
});

module.exports = mongoose.model("NotaFiscal", NotaFiscalSchema);
