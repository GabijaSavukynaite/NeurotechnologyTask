const express = require("express");
const goldPrices = require("./data.json");

const app = express();

const PORT = 8080;

app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.get("/goldPrices", (req, res) => {
  res.send(goldPrices);
});

app.listen(PORT);
