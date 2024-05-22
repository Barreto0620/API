const express = require("express");
const cors = require("cors");
const Africa = require("./Africa.json");
const Oceania = require("./Oceania.json");
const Europa = require("./Europa.json");
const America = require("./America.json");
const Asia = require("./Asia.json");
const path = require("path");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.get("/Africa", (req, res) => {
  res.json(Africa);
});

app.get("/Oceania", (req, res) => {
  res.json(Oceania);
});

app.get("/Europa", (req, res) => {
  res.json(Europa);
});

app.get("/America", (req, res) => {
  res.json(America);
});

app.get("/Asia", (req, res) => {
  res.json(Asia);
});

app.listen(PORT, () => {
  console.log(`Servidor em execução em http://localhost:${PORT}`);
});
