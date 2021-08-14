// const { BrokerType } = require("../enum/broker-type.enum");

module.exports = (mongoose) => {
    let schema = mongoose.Schema({
        type: {
            type: String,
            required: true
        },
        salary: {
            type: Number
        },
        percent: {
            type: Number
        },
        creci: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        admissionDate: {
            type: Date
        },
        __v: {
            type: Number,
            select: false,
        },
    });

    const Broker = mongoose.model("brokers", schema);

    return Broker;
};
