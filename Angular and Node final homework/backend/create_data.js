var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://Felipe25:Felipe25@cluster0.nbmkt.mongodb.net/imobiliaria?retryWrites=true&w=majority'

const database = "imobiliaria";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(database);

    dbo.listCollections({name: 'immobiles'})
    .next(function(err, collinfo) {
        if (collinfo) {
            console.log('Collection Immobiles already exists!')
        }
        else{
            var myobj = [
                {
                    description: 'Imóvel 1',
                    type: 'sítio',
                    nameSeller: 'Paulo',
                    price: 100000,
                    date: new Date(),
                    toSell: true,
                    imgPath: 'data:image/png;base64,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'
                },
                {
                    description: 'Imóvel 2',
                    type: 'apartamento',
                    nameSeller: 'Pedro',
                    price: 200000,
                    date: new Date(),
                    toSell: true,
                    imgPath: null
                },
                {
                    description: 'Imóvel 3',
                    type: 'sala comercial',
                    nameSeller: 'Ricardo',
                    price: 300000,
                    date: new Date(),
                    toSell: true,
                    imgPath: null
                },
                {
                    description: 'Imóvel 4',
                    type: 'casa',
                    nameSeller: 'Ana',
                    price: 400000,
                    date: new Date(),
                    toSell: true,
                    imgPath: null
                },
                {
                    description: 'Imóvel 5',
                    type: 'lote',
                    nameSeller: 'Beatriz',
                    price: 500000,
                    date: new Date(),
                    toSell: true,
                    imgPath: null
                },
            ];
        
            dbo.collection('immobiles').insertMany(myobj);
            console.log("Collection Immobiles created!");
        }
    });

    db.close();

});

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(database);

    dbo.listCollections({name: 'brokers'})
    .next(function(err, collinfo) {
        if (collinfo) {
            console.log('Collection Brokers already exists!')
        }
        else{
            var myobj = [
                {
                    name: 'João',
                    type: 'contratado',
                    salary: 3000,
                    percent: 1,
                    admissionDate: new Date(),
                    creci: '12345'
                },
                {
                    name: 'Carla',
                    type: 'contratado',
                    salary: 4000,
                    percent: 1,
                    admissionDate: new Date(),
                    creci: '54321'
                },
                {
                    name: 'Augusto',
                    type: 'comissionado',
                    salary: null,
                    percent: 2,
                    admissionDate: new Date(),
                    creci: '78910'
                },
                {
                    name: 'Henrique',
                    type: 'comissionado',
                    salary: null,
                    percent: 1,
                    admissionDate: new Date(),
                    creci: '11123'
                },
                {
                    name: 'Rafael',
                    type: 'comissionado',
                    salary: null,
                    percent: 3,
                    admissionDate: new Date(),
                    creci: '14156'
                },
            ];
        
            dbo.collection('brokers').insertMany(myobj);
            console.log("Collection Brokers created!");
        }
    });

    db.close();
});

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(database);

    dbo.listCollections({name: 'sells'})
    .next(function(err, collinfo) {
        if (collinfo) {
            console.log('Collection Sells already exists!')
        }
        else{
            dbo.createCollection('sells', function (err, res) {
                if (err) console.log(err);
                console.log("Collection Sells created!");
            });
        }
    });

    db.close();

});

