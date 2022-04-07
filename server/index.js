"use strict";

const express = require("express");
const morgan = require("morgan");

const PORT = 4000;

// Current attempt
let https = require("https");

let subscriptionKey = "8c0e7bb90e4b4b7fbac08fbc36df006b";
let host = "api.bing.microsoft.com";
let path = "/v7.0/news/search";
let term = "visual";

// Prev attempt
// const Search = require("bing.search");
// const util = require("util");

// search = new Search("8c0e7bb90e4b4b7fbac08fbc36df006b");

// search.web("visual snow syndrome", { top: 12 }, function (err, results) {
//   console.log(util.inspect(results, { colors: true, depth: null }));
// });

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
  .get("/api.bing.microsoft.com/v7.0/news/search", responseHandler())

  // .get("/api.bing.microsoft.com/v7.0/news/search", (req, res) =>
  //   res.status(200).json("success")
  // )
  // .listen(8000, () => console.info(`Listening on port 8000`))

  // Catch-all endpoint
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  .listen(8000, () => console.log(`Listening on port 8000`));

// REST endpoints?
// .get("/bacon", (req, res) => res.status(200).json("🥓"))

// .listen(PORT, () => console.info(`Listening on port ${PORT}`));
