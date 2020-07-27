const mongoose = require("mongoose")
const salesAgentRegisterSchema = mongoose.Schema({
    email: {
        type: String,


    },

    names: {
        type: String
    },

    password: {
        type: String,


    },

    address: {
        type: String,


    },
    address_2: {
        type: String,

    },
    city: {
        type: String

    },
    state: {
        type: String,

    },
    Zip: {
        type: String,
        required: true
    },


})

const SalesAgentRegister = mongoose.model("salesagent", salesAgentRegisterSchema)
module.exports = SalesAgentRegister