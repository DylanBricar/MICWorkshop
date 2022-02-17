const express = require("express")
const router = express.Router()
const Channel = require('../Models/Channel')
const Message = require('../Models/Message')
const User = require('../Models/User')


const ObjectId = require('mongoose').Types.ObjectId

router.get('/', async(req, res) => {
    try {
        var messages = []
        var requestedChannel;

        if (req.query.channel) {
            requestedChannel = await Channel.findOne({
                name: req.query.channel
            })
        }

        if (requestedChannel) {
            messages = await Message.find({ channel: ObjectId(requestedChannel._id) })
                .populate({ path: "channel", select: "name" })
                .populate({ path: "user", select: "name" })
        } else {
            messages = await Message.find()
                .populate({ path: "channel", select: "name" })
                .populate({ path: "user", select: "name" })
        }
        res.send(messages)
    } catch (error) {
        res.status(500).send({ error: error });
    }
})

router.post('/', async(req, res) => {
    try {
        const user = await User.findOne({ "_id": new ObjectId(req.body.id) });
        if (!user.id) {
            res.status(500).send({ error: "Incorrect user id." })
            return;
        }

        //Create channel
        const chan = req.body.touser || req.body.tochannel;
        var channel = await Channel.findOne({ name: chan })

        //Find channel
        if (!channel) {
            if (chan === "GLOBAL") {
                channel = await new Channel({ name: chan });
                channel.save()
            } else {
                const userexists = await User.findOne({ name: chan })
                if (userexists) {
                    channel = await new Channel({ name: chan });
                    channel.save();
                }
            }
        }
        if (!channel) {
            res.status(500).send({ error: "Sorry we were not able to send the message." })
            return;
        }
        const message = new Message({
            user: req.body.id,
            channel: channel._id,
            ...req.body
        });
        await message.save()
        var messages = await Message.find({ channel: ObjectId(channel._id) })
            .populate("user")
            .populate("channel");
        // if (messages) { 
        //     console.log("messages : ", messages)
        //     IO.emit("new-message", { channel: channel, messages: messages })
        // }
        res.send({ ok: "Message saved." })
    } catch (error) {
        res.status(500).send({ error: error });
    }
})

module.exports = router