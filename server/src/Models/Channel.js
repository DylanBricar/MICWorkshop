const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, dropDup: true }
}, { timestamps: true })

const Channel = mongoose.model("channel", schema)

module.exports = Channel;