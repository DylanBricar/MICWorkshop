const mongoose = require("mongoose")
const ObjectID = require("mongoose").Types.ObjectId

const schema = new mongoose.Schema({
    user: { type: ObjectID, required: true, ref: "user" },
    channel: { type: ObjectID, required: true, ref: "channel" },
    message: { type: String, required: true }
}, { timestamps: true })

const Message = mongoose.model("message", schema)

module.exports = Message;