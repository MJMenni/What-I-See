const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const items = require("./data/items.json");

const { MONGO_URI } = process.env;
const client = new MongoClient(MONGO_URI, options);
const db = client.db("WhatISee");
console.log("Connected!");

const newsBatchImport = async () => {
  await client.connect();

  try {
    // Iterate over items, get news value, get rid of duplicates, create an object with _id & news key value pairs. Then, insert resulting documents into MongoDB
    const news = items.map((item) => item.news);
    const newsSet = new Set(news);
    const uniqueNews = [...newsSet];
    const newsDocs = uniqueNews.map((news, _id) => ({
      _id: uuidv4(),
      news,
    }));

    await db.collection("news").insertMany(newsDocs);

    console.log("Done! Successfully imported file.");
  } catch (error) {
    console.log(error.stack);
  }
  client.close();
  console.log("Disconnected");
};

newsBatchImport();
