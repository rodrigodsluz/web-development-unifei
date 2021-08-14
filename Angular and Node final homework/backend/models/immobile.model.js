module.exports = (mongoose) => {
    let schema = mongoose.Schema({
        type: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        nameSeller: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        imgPath: String,
        toSell: {
            type: Boolean,
            default: true
        },
        __v: {
            type: Number,
            select: false,
        },
    });

    const Immobile = mongoose.model("immobiles", schema);

    return Immobile;
};
