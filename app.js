const express = require("express");
const {
  validateTasktOnCreate,
  validateTaskOnUpdate,
} = require("./middleware/validate");

const tasksController = require("./controllers/tasksController");

const app = express();

app.use(express.json());

const bodyParser = express.json();

app.post("/task", bodyParser,validateTasktOnCreate, tasksController.registerTask);

app.get("/tasks", tasksController.getAllTasks);

app.get("/task/:id", tasksController.getOneTask);

app.delete("/task/:id", tasksController.deleteOneTask);

app.put("/task/:id", bodyParser,validateTaskOnUpdate, tasksController.updateTask);

app.get("/task/:id/completion", tasksController.completionTask);

module.exports = app;
