const express = require("express");
const http = require("http");
const cors = require("cors");
const socketIO = require("socket.io");

/** MongoDB database */
const db = require("./DAL/mongodb");

const PORT = 4445;
const app = express();
const server = http.createServer(app);

const socket = socketIO(server, {
  transport: ["polling"],
  cors: { cors: { origin: "*" } },
});

/** Models */
const User = require("./Models/User");

/** Middleware */
app.use(cors());
app.use(express.json());

/** Controllers */
const { router, setIO } = require("./Controller/User");
setIO(socket);
app.use("/user", router);

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Serveur started ${PORT}`);
});
