const express = require("express");

const { tasksController } = require("./controllers");

const app = express();

app.use(express.json());




module.exports = app;
