const mongoose = require("mongoose")
const managerSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        min: 4,
        max: 5,
    }

})

const Manager = mongoose.model("Manager", managerSchema)
module.exports = Manager