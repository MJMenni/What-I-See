const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "../.env" });
const fetch = require("node-fetch");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const { MONGO_URI, REACT_APP_BING_KEY } = process.env;

const newsBatchImport = async () => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    console.log("connected");
    const db = client.db("WhatISee");

    const result = await fetch(
      "https://api.bing.microsoft.com/v7.0/news/search?q=visual%20snow%20syndrome?count%20=10&offset&mkt=en-in",
      {
        headers: {
          "Ocp-Apim-Subscription-Key": REACT_APP_BING_KEY,
          Accept: "application/json",
        },
      }
    );
    const json = await result.json();

    console.log(json.value);

    await db.collection("news").insertMany(json.value);

    console.log("Done! Successfully imported file.");
  } catch (error) {
    console.log(error.stack);
  } finally {
    await client.close();
    console.log("Disconnected");
  }
};

newsBatchImport();
