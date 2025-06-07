const yup = require("yup");

const CREATE_TASK_VALIDATION_SCHEMA = yup.object({
  title: yup.string().trim().min(2).max(20).required(),
  deadline: yup.date().min(new Date()),
  isDone: yup.boolean().default(false),
});

module.exports.validateTasktOnCreate = async (req, res, next) => {
  const { body } = req;
  try {
    const validateTask = await CREATE_TASK_VALIDATION_SCHEMA.validate(body);
    req.body = validateTask;
    next();
  } catch (e) {
    res.status(422).send("Validation Error");
  }
};

module.exports.validateTaskOnUpdate = (req, res, next) => {
  next();
};
