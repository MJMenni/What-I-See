"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config({ path: "../.env" });

const express = require("express");
const morgan = require("morgan");
const fetch = require("node-fetch");

const PORT = 4000;

let https = require("https");

const { handleLogin, handleSignup } = require("./handlers");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const { MONGO_URI, REACT_APP_BING_KEY } = process.env;

let subscriptionKey = REACT_APP_BING_KEY;
let host = "api.bing.microsoft.com";
let path = "/v7.0/news/search";
let term = "visual";

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // REST endpoints
  .get("/api/resources", async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    try {
      await client.connect();
      const db = client.db("WhatISee");

      const news = await db.collection("news").find({}).toArray();
      console.log("news", news);
      return res.status(200).json({
        status: 200,
        message: "news fetched",
        data: { value: news },
      });
    } catch (error) {
      console.log(error.stack);
    } finally {
      await client.close();
      console.log("Disconnected");
    }

    // GET something from a JSON REST API
    // let options = {
    //   uri: "/api.bing.microsoft.com/v7.0/news/search",
    //   qs: {
    //     access_token: REACT_APP_BING_KEY, // -> uri + '?access_token=xxxxx%20xxxxx'
    //   },
    //   headers: {
    //     "User-Agent": "Request-Promise",
    //   },
    //   json: true, // Automatically parses the JSON string in the response
    // };
    // console.log("connected");
    // fetch(
    //   "https://api.bing.microsoft.com/v7.0/news/search?q=visual%20snow%20syndrome",
    //   {
    //     headers: {
    //       "Ocp-Apim-Subscription-Key": REACT_APP_BING_KEY,
    //       Accept: "application/json",
    //     },
    //   }
    // )
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     res.status(200).json({
    //       status: 200,
    //       message: "connected",
    //       data,
    //     });
    //   });
  })

  // Post endpoint
  .post("/api/login", handleLogin)
  .post("/api/signup", handleSignup)
  // Catch-all endpoint
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  .listen(8000, () => console.log(`Listening on port 8000`));
