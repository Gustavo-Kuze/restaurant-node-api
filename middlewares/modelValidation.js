/* eslint-disable consistent-return */
const getModel = require('../model/');

const validate = (data, schema) => {
  const validationReturn = { isValid: true, message: 'OK' };
  const { error } = schema.validate(data);
  if (error && error.details) {
    validationReturn.isValid = false;
    validationReturn.message = error.details[0].message;
  }
  return validationReturn;
};

const modelValidationMiddleware = (req, res, next) => {
  try {
    const validationResults = validate(
      req.body,
      getModel(req.baseUrl + req.url),
    );

    if (!validationResults.isValid) {
      return res.status(400).send(validationResults.message);
    }
    next();
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = modelValidationMiddleware;
