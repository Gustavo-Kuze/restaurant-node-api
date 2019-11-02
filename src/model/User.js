const joi = require('@hapi/joi');

const register = joi.object({
  tipoUsuario: joi
    .string()
    .min(5)
    .required(),
  email: joi
    .string()
    .min(6)
    .required()
    .email(),
  senha: joi
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
  senha: joi
    .string()
    .min(6)
    .required(),
});

module.exports = { register, login };
