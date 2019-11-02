const joi = require('@hapi/joi');

const createOrUpdatePerson = joi.object({
  nome: joi
    .string()
    .min(5)
    .required(),
  dataNascimento: joi
    .string()
    .min(10)
    .required(),
  cpf: joi.string().min(11),
  rg: joi.string().min(10),
  telefone1: joi
    .string()
    .min(11)
    .required(),
  telefone2: joi.string().min(11),
  idEndereco: joi.number().required(),
  estadoCivil: joi.string().required(),
});

module.exports = { createOrUpdatePerson };
