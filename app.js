const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

const stylesController = require('./controllers/stylesController')
app.use('/styles', stylesController)

app.get("/", (req, res) => {
  res.status(200).send("Server working 🔥");
});

app.get("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

module.exports = app;
