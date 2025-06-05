const { v4: uuidv4 } = require("uuid");

const tasksBd = new Map();

class Task {
  constructor(title, deadline, isDone = false) {
    this.id = uuidv4();
    this.title = title;
    this.deadline = deadline;
    this.isDone = isDone;
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

  static deleteTask() {
    return tasksBd.delete(id);
  }

  updateTask(updateValue) {
    tasksBd.set(this.id, { ...this, ...updateValue });
    return tasksBd.get(this.id);
  }
}

module.exports = Task;
