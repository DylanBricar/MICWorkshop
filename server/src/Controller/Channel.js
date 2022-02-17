const express = require("express")
const router = express.Router()
const Channel = require('../Models/Channel')

router.get('/', async(req, res) => {
    try {
        const channels = await Channel.find();
        res.send(channels)
    } catch (error) {
        res.status(500).send({ error: error });
    }
})

router.post('/', async(req, res) => {
    try {
        const channel = new Channel(req.body)
        await channel.save()
        res.send({ ok: "Channel created" });
    } catch (error) {
        res.status(500).send({ error: error });
    }
})

module.exports = router