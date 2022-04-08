"use strict";

require("dotenv").config({ path: "../.env" });
const { REACT_APP_BING_KEY } = process.env;

const express = require("express");
const morgan = require("morgan");
const fetch = require("node-fetch");

const PORT = 4000;

let https = require("https");

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
  .get("/api/resources", (req, res) => {
    // GET something from a JSON REST API
    var options = {
      uri: "/api.bing.microsoft.com/v7.0/news/search",
      qs: {
        access_token: REACT_APP_BING_KEY, // -> uri + '?access_token=xxxxx%20xxxxx'
      },
      headers: {
        "User-Agent": "Request-Promise",
      },
      json: true, // Automatically parses the JSON string in the response
    };
    console.log("connected");
    fetch(
      "https://api.bing.microsoft.com/v7.0/news/search?q=visual%20snow%20syndrome",
      {
        headers: {
          "Ocp-Apim-Subscription-Key": REACT_APP_BING_KEY,
          Accept: "application/json",
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
      });
    res.status(200).json({
      status: 200,
      message: "connected",
    });
  })

  // Catch-all endpoint
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  .listen(8000, () => console.log(`Listening on port 8000`));
