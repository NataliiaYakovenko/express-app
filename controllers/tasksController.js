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
  const task = Task.findOneTask(Number(id));

  if (id) {
    res.status(200).send(task);
  } else {
    res.status(404).end();
  }
};

module.exports.deleteOneTask = (req, res, next) => {
  const { id } = req.params;
  const task = Task.findOneTask(Number(id));

  if (id) {
    res.status(200).send(task);
  } else {
    res.status(404).end();
  }
};

module.exports.updateTask = (req, res, next) => {
  const {
    body,
    params: { id },
  } = req;
  const task = Task.findOneTask(Number(id));

  if (task) {
    const updateData = Task.updateTask(body);
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

  res.status(200).send("Task had done");
};
