const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    product_picture: {
        type: String
    },
    serial_number: {
        type: String

    },

    category: {
        type: String,
        required: true
    },
    quantity: {
        type: String,

    },
    price: {
        type: Number,
        required: true
    },
    serial_number: {
        type: String,

    },
    entry_date: {
        type: Date,
        default: Date.now()
    },
    size: {
        type: String,

    },
    color: {
        type: String,

    },
    description: {
        type: String,

    },


})

module.exports = mongoose.model("product", productSchema)