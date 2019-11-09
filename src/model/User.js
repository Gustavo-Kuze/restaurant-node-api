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

const setPersonalInfo = joi.object({
  userId: joi.number().required(),
  personId: joi.number().required(),
});

const setDisabledState = joi.object({
  usuarioId: joi.number().required(),
  desabilitado: joi.number().required(),
});

const updateEmail = joi.object({
  usuarioId: joi.number().required(),
  email: joi
    .string()
    .min(6)
    .required()
    .email(),
});

const updatePassword = joi.object({
  usuarioId: joi.number().required(),
  senha: joi
    .string()
    .min(6)
    .required(),
});

module.exports = {
  register,
  login,
  setPersonalInfo,
  setDisabledState,
  updateEmail,
  updatePassword,
};
