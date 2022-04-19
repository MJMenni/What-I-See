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

    console.log(user);
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
    const { emailInput, userInput } = req.body;
    const user = await db.collection("users").findOne({ email: emailInput });
    // if (user || emailMatch) {

    if (user) {
      return res.status(500).json({
        status: 500,
        message: "User exists",
      });
    }

    const { insertedId } = await db
      .collection("users")
      .insertOne({ email: emailInput, username: userInput, stats: [] });

    const newUser = await db
      .collection("users")
      .findOne({ _id: ObjectId(insertedId) });
    console.log(newUser);
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

// Add user's current stats
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

module.exports = {
  handleLogin,
  handleSignup,
  addStats,
};
