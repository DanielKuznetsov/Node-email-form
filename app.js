const express = require("express");

const app = express();

app.use(express.json({ limit: "10kb" }));

module.exports = app;
