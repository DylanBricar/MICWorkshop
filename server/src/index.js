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

app.get("/", (req, res) => {
    res.send({ body: "Bonjour" })
})

app.post("/testJson", (req, res) => {
    try {
        if (!req.body.name) {
            throw "You need to provid a name."
        }
        res.send({ ok: `Your name is ${req.body.name}` })
    } catch (error) {
        res.status(500).send({ error: error })
    }
})

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Serveur started ${PORT}`)
})