const db = require("../models");
const Immobile = db.immobile;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.type || !req.body.description || !req.body.nameSeller || !req.body.price || !req.body.date) {
        return res
            .status(400)
            .send({ message: "(*) Campos obrigatórios não podem ser vazios!" });
    }

    // Create a immobile instance
    const immobile = new Immobile({
        type: req.body.type,
        description: req.body.description,
        nameSeller: req.body.nameSeller,
        price: req.body.price,
        date: req.body.date,
        imgPath: req.body.imgPath,
    });

    // Save immobile in the database
    immobile
        .save()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res
                .status(500)
                .send({
                    message: err.message || "Algum erro aconteceu ao salvar o imóvel.",
                });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Immobile
        .findById(id)
        .then((data) => {
            if (!data)
                res
                    .status(404)
                    .send({
                        message: "Não foi encontrado um imóvel com o ID " + id,
                    });
            else res.send(data);
        })
        .catch(() => {
            res
                .status(500)
                .send({
                    message: "Erro ao buscar um imóvel com o ID " + id,
                });
        });
};

exports.findAll = (req, res) => {
    Immobile
        .find({toSell: true})
        .then((data) => {
            // console.log(data)
            res
                .status(200)
                .send(data);
        })
        .catch((err) => {
            res
                .status(500)
                .send({
                    message: err.message || "Algum erro aconteceu ao buscar os imóveis.",
                });
        });
};

exports.findAllSelled = (req, res) => {
    Immobile
        .find({toSell: false})
        .then((data) => {
            // console.log(data)
            res
                .status(200)
                .send(data);
        })
        .catch((err) => {
            res
                .status(500)
                .send({
                    message: err.message || "Algum erro aconteceu ao buscar os imóveis.",
                });
        });
};

exports.update = (req, res) => {
    if (!req.body) {
        res
            .status(400)
            .send({
                message: "Body da requisição não pode ser vazio.",
            });
        return;
    }

    const id = req.params.id;

    Immobile
        .findByIdAndUpdate(id, req.body)
        .then((data) => {
            if (!data) {
                res
                    .status(404)
                    .send({
                        message: `Não foi possível encontrar um imóvel com o ID ${id}. Talvez o imóvel não exista!`,
                    });
            } else {
                res.send({
                    message: "Imóvel atualizado com sucesso.",
                });
            }
        })
        .catch((err) => {
            res
                .status(500)
                .send({
                    message:
                        err.message || "Algum erro aconteceu ao tentar o imóvel com o ID " + id,
                });
        });
};

exports.delete = async (req, res) => {
    const id = req.params.id;

    Immobile
        .findByIdAndDelete(id)
        .then((data) => {
            if (!data) {
                res
                    .status(404)
                    .send({
                        message: `Não foi possível excluir o imóvel de ID ${id}. Talvez o imóvel não exista!`,
                    });
            } else {
                res.send({
                    message: "Imóvel deletado com sucesso!",
                });
            }
        })
        .catch(() => {
            res
                .status(500)
                .send({
                    message: "Erro ao excluir o imóvel com o ID" + id,
                });
        });
};

exports.upload = (req, res) => {
    if (!req.body) {
        res
            .status(400)
            .send({
                message: "Body da requisição não pode ser vazio.",
            });
        return;
    }

    const id = req.params.id;
    const imgPath = { imgPath: req.file.filename };

    Immobile
        .findByIdAndUpdate(id, imgPath)
        .then((data) => {
            if (!data) {
                res
                    .status(404)
                    .send({
                        message: `Não foi possível encontrar um imóvel com o ID ${id}. Talvez o imóvel não exista!`,
                    });
            } else {
                res.send(imgPath);
            }
        })
        .catch((err) => {
            res
                .status(500)
                .send({
                    message:
                        err.message || "Algum erro aconteceu ao tentar o imóvel com o ID " + id,
                });
        });
};
