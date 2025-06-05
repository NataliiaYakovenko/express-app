const { v4: uuidv4 } = require("uuid");

const { format } = require("date-fns");

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

  findOneTask(id) {
    tasksBd.get(this.id, this);
  }

  findAllTask() {
    tasksBd.get(...this, values());
  }

  deleteTask() {
    tasksBd.delete(this.id);
  }

  updateTask(updateValue) {
    tasksBd.set(this.id, { ...this, ...updateValue });
    tasksBd.get(this.id);
  }
}

module.exports = Task;
