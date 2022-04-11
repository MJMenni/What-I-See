"use strict";
const { sendResponse } = require("./utils");
const { MongoClient } = require("mongodb");

require("dotenv").config({ path: "../.env" });
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
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
        message: "User not exists",
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
    const { emailInput, userInput } = req.body;

    const user = await db.collection("users").findOne({ email: emailInput });
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

module.exports = {
  handleLogin,
  handleSignup,
};
