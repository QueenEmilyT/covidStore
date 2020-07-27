const mongoose = require("mongoose")
const registrationSchema = mongoose.Schema({
    firstname: {
        type: String,

        required: true,
    },
    lastname: {
        type: String

    },

    id: {
        type: String,
        required: true
    },
    email: {
        type: String,

    },
    city: {
        type: String,

    },
    state: {
        type: String,

    },
    zip: {
        type: String,

    },
})

module.exports = mongoose.model("registration", registrationSchema)