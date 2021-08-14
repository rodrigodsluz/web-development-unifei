const db = require("../models");
const Broker = db.broker;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.type || !req.body.name || !req.body.creci) {
        return res
            .status(400)
            .send({ message: "(*) Campos obrigatórios não podem ser vazios!" });
    }
    
    if (req.body.type == 'contratado' && !req.body.admissionDate || req.body.type == 'contratado' && !req.body.salary) {
        return res
            .status(400)
            .send({ message: "(*) Campos obrigatórios não podem ser vazios!" });
    }

    if (req.body.type == 'comissionado' && !req.body.percent) {
        return res
            .status(400)
            .send({ message: "(*) Campos obrigatórios não podem ser vazios!" });
    }
    if(req.body.percent && req.body.percent < 1 || req.body.percent && req.body.percent > 3){
        return res
            .status(400)
            .send({ message: "O valor da comissão deve estar entre 1 e 3!" });
    }

    // Create a broker instance
    const broker = new Broker({
        type: req.body.type,
        salary: req.body.salary ? req.body.salary : null,
        percent: req.body.percent ? req.body.percent : null,
        creci: req.body.creci,
        name: req.body.name,
        admissionDate: req.body.admissionDate ? req.body.admissionDate : null,
    });

    // Save broker in the database
    broker
        .save()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res
                .status(500)
                .send({
                    message: err.message || "Algum erro aconteceu ao salvar o corretor.",
                });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Broker
        .findById(id)
        .then((data) => {
            if (!data)
                res
                    .status(404)
                    .send({
                        message: "Não foi encontrado um corretor com o ID " + id,
                    });
            else res.send(data);
        })
        .catch(() => {
            res
                .status(500)
                .send({
                    message: "Erro ao buscar um corretor com o ID " + id,
                });
        });
};

exports.findAll = (req, res) => {
    Broker
        .find({})
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
                    message: err.message || "Algum erro aconteceu ao buscar os corretores.",
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

    Broker
        .findByIdAndUpdate(id, req.body)
        .then((data) => {
            if (!data) {
                res
                    .status(404)
                    .send({
                        message: `Não foi possível encontrar um corretor com o ID ${id}. Talvez o corretor não exista!`,
                    });
            } else {
                res.send({
                    message: "Corretor atualizado com sucesso.",
                });
            }
        })
        .catch((err) => {
            res
                .status(500)
                .send({
                    message:
                        err.message || "Algum erro aconteceu ao tentar o corretor com o ID " + id,
                });
        });
};

exports.delete = async (req, res) => {
    const id = req.params.id;

    Broker
        .findByIdAndDelete(id)
        .then((data) => {
            if (!data) {
                res
                    .status(404)
                    .send({
                        message: `Não foi possível excluir o corretor de ID ${id}. Talvez o corretor não exista!`,
                    });
            } else {
                res.send({
                    message: "Corretor deletado com sucesso!",
                });
            }
        })
        .catch(() => {
            res
                .status(500)
                .send({
                    message: "Erro ao excluir o corretor com o ID" + id,
                });
        });
};
