module.exports = (mongoose) => {
    let schema = mongoose.Schema({
        buyerName: {
            type: String,
            required: true
        },
        value: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        brokerId: {
            type: String,
            required: true
        },
        broker: {
            type: Object,
            required: true
        },
        immobile: {
            type: Object,
            required: true
        },
        __v: {
            type: Number,
            select: false
        }
    });

    const Sell = mongoose.model('sells', schema);

    return Sell;
}; 