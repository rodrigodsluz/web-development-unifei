const mongoose = require("mongoose");
const express = require("express");
const routes = require("./routes");
const Product = require("./src/Models/Product");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3000, async () => {
  const products = [
    {
      codigo: "82345845",
      descricao: "Camisa regata",
      valorUnitario: 89.9,
      desconto: 20,
    },
    {
      codigo: "48523586",
      descricao: "Camisa social",
      valorUnitario: 139.9,
      desconto: 20,
    },
    {
      codigo: "59824534",
      descricao: "Calça moletom",
      valorUnitario: 169.9,
      desconto: 10,
    },
    {
      codigo: "18524964",
      descricao: "Blusa de frio",
      valorUnitario: 99.9,
      desconto: 0,
    },
    {
      codigo: "21764980",
      descricao: "Sutiã",
      valorUnitario: 19.9,
      desconto: 10,
    },
  ];

  await Product.deleteMany({});
  // eslint-disable-next-line no-await-in-loop
  for (const product of products) {
    await Product.create(product);
  }

  console.log(`Server has started on port 3000`);
});

mongoose.connect("mongodb://localhost:27017/nota-fiscal", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
