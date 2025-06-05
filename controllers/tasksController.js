const Task = require("../models/Tasks");

module.exports.registerTask = (req, res, next) => {
  const { body } = req;

  const task = new Task(body);
  task.addTask();
  res.status(201).send(task);
};

module.exports.getAllTasks = (req, res, next) => {
  const tasksArray = Task.findAllTask();
  res.status(200).send(tasksArray);
};

module.exports.getOneTask = (req, res, next) => {
  const { id } = req.params;
  const task = Task.findOneTask(id);

  if (task) {
    res.status(200).send(task);
  } else {
    res.status(404).end();
  }
};

module.exports.deleteOneTask = (req, res, next) => {
  const { id } = req.params;
  const siDelete = Task.deleteTask(id);

  if (siDelete) {
    res.status(200).send("Task deleted");
  } else {
    res.status(404).end("Task not found");
  }
};

module.exports.updateTask = (req, res, next) => {
  const {
    body,
    params: { id },
  } = req;
  const task = Task.findOneTask(id);

  if (task) {
    const updateData = Task.updateTask(id, body);
    res.status(200).send(updateData);
  } else {
    res.status(404).end();
  }
};

module.exports.completionTask = (req, res, next) => {
  const {
    params: { id },
    query: { isDone },
  } = req;
  const task = Task.findOneTask(id);
  const updated = Task.updateTask(id, { isDone: isDone === "true" });

  if (task) {
    res.status(200).send(updated);
  } else {
    res.status(404).end("Task not found");
  }
};
