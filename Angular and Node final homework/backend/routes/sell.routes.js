module.exports = (app) => {
  const sell = require("../controllers/sell.controller");
  let router = require("express").Router();

  router.post("/", sell.create);

  router.get("/", sell.findAll);

  router.get("/:id", sell.findBrokers);

  router.put("/:id", sell.update);

  // router.delete("/:id", sell.delete);

  app.use("/sells", router);
};
