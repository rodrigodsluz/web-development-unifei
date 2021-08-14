const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "..", "uploads"),
  filename(req, file = {}, cb) {
    const { originalname } = file;
    const fileExtension = (originalname.match(/\.+[\S]+$/) || [])[0];
    cb(null, `${file.fieldname}__${Date.now()}${fileExtension}`);
  },
});
const upload = multer({ storage });
module.exports = (app) => {
  const immobile = require("../controllers/immobile.controller");
  let router = require("express").Router();

  router.post("/", immobile.create);

  router.get("/", immobile.findAll);

  router.get("/:id", immobile.findOne);

  router.get("/selled", immobile.findAllSelled);

  router.put("/:id", immobile.update);

  router.delete("/:id", immobile.delete);

  router.post("/upload/:id", upload.single("image"), immobile.upload);

  app.use("/immobiles", router);
};
