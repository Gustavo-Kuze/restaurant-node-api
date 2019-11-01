const joi = require('@hapi/joi');

const createOrUpdateAddress = joi.object({
  logradouro: joi
    .string()
    .min(5)
    .required(),
  numero: joi.number().required(),
  bairro: joi
    .string()
    .min(5)
    .required(),
  complemento: joi.string(),
  cidade: joi
    .string()
    .min(5)
    .required(),
  uf: joi
    .string()
    .min(2)
    .max(2)
    .required(),
});

module.exports = { createOrUpdateAddress };
