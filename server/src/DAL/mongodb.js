const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/Dylan",
  {
    minPoolSize: 2,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected to the DB.");
  }
);
