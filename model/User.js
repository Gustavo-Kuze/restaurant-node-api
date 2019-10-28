const joi = require('@hapi/joi');

const register = joi.object({
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

const login = joi.object({
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

module.exports = { register, login };
