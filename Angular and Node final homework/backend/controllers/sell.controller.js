const db = require("../models");
const Sell = db.sell;
const Immobile = db.immobile;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.date || !req.body.value || !req.body.immobile || !req.body.broker || !req.body.buyerName) {
        return res
            .status(400)
            .send({ message: "(*) Campos obrigatórios não podem ser vazios!" });
    }
    // Create a sell instance
    const sell = new Sell({
        value: req.body.value,
        date: req.body.date,
        immobile: req.body.immobile,
        broker: req.body.broker,
        buyerName: req.body.buyerName,
        brokerId: req.body.brokerId,
    });

    // Save sell in the database
    sell
        .save()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res
                .status(500)
                .send({
                    message: err.message || "Algum erro aconteceu ao salvar a venda.",
                });
        });
};

exports.findBrokers = (req, res) => {
    const brokerId = req.params.id;

    Sell
        .find({brokerId: brokerId})
        .then((data) => {
            if (!data)
                res
                    .status(404)
                    .send({
                        message: "Não foram encontrados corretores",
                    });
            else res.send(data);
        })
        .catch(() => {
            res
                .status(500)
                .send({
                    message: "Erro ao buscar corretores",
                });
        });
};

exports.findAll = (req, res) => {
    Sell
        .find()
        .populate({path: 'brokers', select: 'name'})
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
                    message: err.message || "Algum erro aconteceu ao buscar as vendas.",
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

    Sell
        .findByIdAndUpdate(id, req.body)
        .then((data) => {
            if (!data) {
                res
                    .status(404)
                    .send({
                        message: `Não foi possível encontrar uma venda com o ID ${id}. Talvez a venda não exista!`,
                    });
            } else {
                res.send({
                    message: "Venda atualizado com sucesso.",
                });
            }
        })
        .catch((err) => {
            res
                .status(500)
                .send({
                    message:
                        err.message || "Algum erro aconteceu ao tentar encontrar a venda com o ID " + id,
                });
        });
};

// exports.delete = async (req, res) => {
//     const id = req.params.id;

//     Broker
//         .findByIdAndDelete(id)
//         .then((data) => {
//             if (!data) {
//                 res
//                     .status(404)
//                     .send({
//                         message: `Não foi possível excluir o corretor de ID ${id}. Talvez o corretor não exista!`,
//                     });
//             } else {
//                 res.send({
//                     message: "Corretor deletado com sucesso!",
//                 });
//             }
//         })
//         .catch(() => {
//             res
//                 .status(500)
//                 .send({
//                     message: "Erro ao excluir o corretor com o ID" + id,
//                 });
//         });
// };
