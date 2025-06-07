const { v4: uuidv4 } = require("uuid");


const tasksBd = new Map();

class Task {
  constructor(title, deadline) {
    this.id = uuidv4();
    this.title = title;
    this.deadline = deadline;
  }

  addTask() {
    tasksBd.set(this.id, this);
  }

  static findOneTask(id) {
    return tasksBd.get(id);
  }

  static findAllTask() {
    return [...tasksBd.values()];
  }

  static deleteTask(id) {
    return tasksBd.delete(id);
  }

  static updateTask(id, updateValue) {
    const task = tasksBd.get(id);

    if (!task) {
      return null;
    }

    const titleKeys = ["deadline", "title"];
    const titlePart = {};
    const rootPart = {};

    for (const key in updateValue) {
      if (titleKeys.includes(key)) {
        titlePart[key] = updateValue[key];
      } else {
        rootPart[key] = updateValue[key];
      }
    }

    const structuredUpdate = {
      ...rootPart,
      title: {
        ...task.title,
        ...titlePart,
      },
    };

    const updateTask = { ...task, ...structuredUpdate };
    tasksBd.set(id, updateTask);
    return updateTask;
  }
}

module.exports = Task;
