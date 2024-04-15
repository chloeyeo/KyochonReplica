const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
require("dotenv").config();
const dbUrl = process.env.MONGODB_URL;

app.use(express.json());
app.use(cors()); // can access this backend from anywhere now.
// can congifure cors so that only frontend server can access.
// cors config security, authorization etc per each folder

// const { userRouter } = require("./routes/userRouter");

const server = async function () {
  try {
    await mongoose.connect(dbUrl);
    mongoose.set("debug", true); // to see data inputs into db
    console.log("db connected");
    // app.use("/user", userRouter);
    app.listen(4000, function () {
      console.log("server on port 4000");
    });
  } catch (error) {
    console.error("unable to connect to db", error.message);
  }
};

server();
