// Import dependencies
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const dbConfig = require("../config/database.config.js");
const db = {};

db.mongoose = mongoose;
db.url = dbConfig.url;
db.immobile = require("./immobile.model")(mongoose);
db.broker = require("./broker.model")(mongoose);
db.sell = require("./sell.model")(mongoose);

module.exports = db;