const express = require("express");
const http = require('http');
const cors = require("cors")

/** MongoDB database */
const db = require("./DAL/mongodb")

const PORT = 4445;
const app = express()
const server = http.createServer(app)

/** Models */
const User = require("./Models/User")

/** Middleware */
app.use(cors())
app.use(express.json())

/** Controllers */
const userController = require("./Controller/User")
app.use("/user", userController)

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Serveur started ${PORT}`)
})