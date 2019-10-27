/* eslint-disable consistent-return */
const schemas = require('../modelValidationSchemas/user');

const getSchemaName = (url) => {
  switch (url) {
    case '/register':
      return 'register';
    case '/login':
      return 'login';
    default:
      return '';
  }
};

const validate = (data, schema) => {
  const validationReturn = { isValid: true, message: 'OK' };
  const { error } = schema.validate(data);
  if (error && error.details) {
    validationReturn.isValid = false;
    validationReturn.message = error.details[0].message;
  }
  return validationReturn;
};

const middleware = (req, res, next) => {
  const schemaName = getSchemaName(req.url);
  const validationResults = validate(req.body, schemas[schemaName]);

  if (!validationResults.isValid) {
    return res.status(400).send(validationResults.message);
  }
  next();
};

module.exports = middleware;
