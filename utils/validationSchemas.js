const yup = require("yup");

const TITLE_VALIDATION_SCHEMA = yup.string().trim().min(2).max(20);
const DEADLINE_VALIDATION_SCHEMA = yup.date().min(new Date());
const ISDONE_VALIDATION_SCHEMA = yup.boolean().default(false);

module.exports.CREATE_TASK_VALIDATION_SCHEMA = yup.object({
  title: TITLE_VALIDATION_SCHEMA.required(),
  deadline: DEADLINE_VALIDATION_SCHEMA,
  isDone: ISDONE_VALIDATION_SCHEMA,
});

module.exports.UPDATE_TASK_VALIDATION_SCHEMA = yup.object({
  title: TITLE_VALIDATION_SCHEMA,
  deadline: DEADLINE_VALIDATION_SCHEMA,
  isDone: ISDONE_VALIDATION_SCHEMA,
});
