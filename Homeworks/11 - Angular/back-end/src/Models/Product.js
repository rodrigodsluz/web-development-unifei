const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  codigo: { type: String, required: true },
  descricao: { type: String, required: true },
  valorUnitario: { type: Number, required: true },
  desconto: { type: Number, required: true },
});

module.exports = mongoose.model("Product", ProductSchema);
