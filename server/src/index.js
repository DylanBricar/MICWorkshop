const express = require("express");
const http = require('http');
const cors = require("cors")

/** MongoDB database */
const db = require("./DAL/mongodb")

const PORT = 4444;
const app = express()
const server = http.createServer(app)

/** Middleware */
app.use(cors())
app.use(express.json())

/** Controllers */
const channelController = require("./Controller/Channel")
app.use("/channel", channelController)
const messageController = require("./Controller/Message")
app.use("/message", messageController)

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Serveur started ${PORT}`)
})