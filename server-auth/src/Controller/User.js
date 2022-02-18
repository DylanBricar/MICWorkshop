const express = require("express");
const router = express.Router();

const User = require("../Models/User");

router.get("/", async (req, res) => {
  try {
    const users = await User.find().select(["-_id", "-password"]);
    res.send(users);
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    const users = await User.find().select(["-_id", "-password"]);
    IO.emit("new-user", users);

    res.send(users);
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

router.post("/connect", async (req, res) => {
  try {
    const user = await User.findOne(
      {
        name: req.body.name,
        password: req.body.password,
      },
      "-password"
    );

    if (!user || !user._id) {
      throw "Problem with user or password, try again.";
    }
    await user.updateOne({ connected: true });
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

let IO = {};
const setIO = (io) => {
  IO = io;
};

module.exports = { router, setIO };
