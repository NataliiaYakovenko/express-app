const { v4: uuidv4 } = require("uuid");

const { format } = require("date-fns");

const tasksDb = new Map();

class Task {
  constructor(title, deadline, isDone) {
    this.id = id;
    this.title = title;
    this.deadline = deadline;
    this.isDone = isDone;
  }
}
