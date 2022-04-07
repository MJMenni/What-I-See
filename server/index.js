"use strict";

var Search = require("bing.search");
var util = require("util");

search = new Search("8c0e7bb90e4b4b7fbac08fbc36df006b");

search.web("visual snow syndrome", { top: 8 }, function (err, results) {
  console.log(util.inspect(results, { colors: true, depth: null }));
});

const express = require("express");
const morgan = require("morgan");

const PORT = 4000;

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
  .get("/", (req, res) => res.status(200).json("success"))
  .listen(PORT, () => console.info(`Listening on port ${PORT}`));

// REST endpoints?
// .get("/bacon", (req, res) => res.status(200).json("🥓"))

// .listen(PORT, () => console.info(`Listening on port ${PORT}`));
