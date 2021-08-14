module.exports = (app) => {
  const broker = require("../controllers/broker.controller");
  let router = require("express").Router();

  router.post("/", broker.create);

  router.get("/", broker.findAll);

  router.get("/:id", broker.findOne);

  router.put("/:id", broker.update);

  router.delete("/:id", broker.delete);

  app.use("/brokers", router);
};
