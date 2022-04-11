"use strict";
const { sendResponse } = require("./utils");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let responseHandler = (response) => {
  let body = "";
};

response.on("data", function (d) {
  body += d;
});

response.on("end", function () {
  console.log("\nRelevant Headers:\n");
  // header keys are lower-cased by Node.js
  for (var header in response.headers)
    if (header.startsWith("bingapis-") || header.startsWith("x-msedge-"))
      console.log(header + ": " + response.headers[header]);
  body = JSON.stringify(JSON.parse(body), null, "  ");
  console.log("\nJSON Response:\n");
  console.log(body);
});

const handleLogin = (req, res) => {
  const { emailInput } = req.body;
  const loggedInUser = res.find((email) => {
    return email === emailInput;
  });
  sendResponse(res, 200, loggedInUser);
};

module.exports = {
  responseHandler,
  handleLogin,
};
