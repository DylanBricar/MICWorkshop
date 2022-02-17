const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: { type: String, unique: true, required: true, dropDup: true },
    password: { type: String, required: true },
    connected: { type: Boolean }
}, { timestamps: true })

const User = mongoose.model("user", schema)

module.exports = User;