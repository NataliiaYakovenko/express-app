const {
  CREATE_TASK_VALIDATION_SCHEMA,
  UPDATE_TASK_VALIDATION_SCHEMA,
} = require("../utils/validationSchemas");

module.exports.validateTasktOnCreate = async (req, res, next) => {
  const { body } = req;
  try {
    const validateTask = await CREATE_TASK_VALIDATION_SCHEMA.validate(body);
    req.body = validateTask;
    next();
  } catch (e) {
    next(e);
  }
};

module.exports.validateTaskOnUpdate = async (req, res, next) => {
  const { body } = req;
  try {
    const validateTask = await UPDATE_TASK_VALIDATION_SCHEMA.validate(body);
    req.body = validateTask;
    next();
  } catch (e) {
    next(e);
  }
};
