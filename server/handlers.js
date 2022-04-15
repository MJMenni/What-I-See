"use strict";
const { sendResponse } = require("./utils");
const { MongoClient, ObjectId } = require("mongodb");

require("dotenv").config({ path: "../.env" });
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const handleLogin = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("WhatISee");
    const { emailInput } = req.body;
    const user = await db.collection("users").findOne({ email: emailInput });
    if (!user) {
      return res.status(401).json({
        status: 401,
        message: "User does not exists",
      });
    }

    return res.status(200).json({
      status: 200,
      data: user,
    });
  } catch (err) {
    res.status(500).json({ status: "Error", data: req.body, msg: err.message });
  } finally {
    client.close();
  }
};

const handleSignup = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("WhatISee");
    // email validation check
    // const emailMatch = emailInput === userInput;
    // console.log("emailMatch", emailMatch);
    const { emailInput, userInput } = req.body;
    // console.log("emailInput", emailInput);
    const user = await db.collection("users").findOne({ email: emailInput });
    // if (user || emailMatch) {
    if (user) {
      return res.status(500).json({
        status: 500,
        message: "User exists",
      });
    }

    const newUser = await db
      .collection("users")
      .insertOne({ email: emailInput, username: userInput });

    return res.status(200).json({
      status: 200,
      data: newUser,
    });
  } catch (err) {
    res.status(500).json({ status: "Error", data: req.body, msg: err.message });
  } finally {
    client.close();
  }
};

// In progress, needs to be updated for addStats
const addStats = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("WhatISee");
    const { newStats, _id } = req.body;
    console.log(newStats);
    if (!newStats) {
      return res.status(401).json({
        status: 401,
        message: "Cannot add data",
      });
    }

    await db
      .collection("users")
      .updateOne({ _id: ObjectId(_id) }, { $push: { stats: newStats } });

    return res.status(200).json({
      status: 200,
    });
  } catch (err) {
    res.status(500).json({ status: "Error", data: req.body, msg: err.message });
  } finally {
    client.close();
  }
};

//In progress, needs to be updated for addStats
const getStats = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("WhatISee");
    const { stats } = req.body;
    // const user = await db.collection("users").findOne({ email: emailInput });
    if (!stats) {
      return res.status(401).json({
        status: 401,
        message: "Cannot find data",
      });
    }

    return res.status(200).json({
      status: 200,
      data: stats,
    });
  } catch (err) {
    res.status(500).json({ status: "Error", data: req.body, msg: err.message });
  } finally {
    client.close();
  }
};

module.exports = {
  handleLogin,
  handleSignup,
  addStats,
  getStats,
};

// let responseHandler = (response) => {
//   let body = "";
// };

// response.on("data", function (d) {
//   body += d;
// });

// response.on("end", function () {
//   console.log("\nRelevant Headers:\n");
//   // header keys are lower-cased by Node.js
//   for (var header in response.headers)
//     if (header.startsWith("bingapis-") || header.startsWith("x-msedge-"))
//       console.log(header + ": " + response.headers[header]);
//   body = JSON.stringify(JSON.parse(body), null, "  ");
//   console.log("\nJSON Response:\n");
//   console.log(body);
// });
