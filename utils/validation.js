const joi = require('@hapi/joi');

const validate = (data, schema) => {
  const validationReturn = { isValid: true, message: 'Tudo ocorreu bem!' };
  const { error } = schema.validate(data);
  if (error && error.details) {
    validationReturn.isValid = false;
    validationReturn.message = error.details[0].message;
  }
  return validationReturn;
};

const validateRegister = (data) => {
  const schema = joi.object({
    name: joi
      .string()
      .min(6)
      .required(),
    email: joi
      .string()
      .min(6)
      .required()
      .email(),
    password: joi
      .string()
      .min(6)
      .required(),
  });
  return validate(data, schema);
};

const validateLogin = (data) => {
  const schema = joi.object({
    email: joi
      .string()
      .min(6)
      .required()
      .email(),
    password: joi
      .string()
      .min(6)
      .required(),
  });
  return validate(data, schema);
};

module.exports = {
  validateRegister,
  validateLogin,
};
