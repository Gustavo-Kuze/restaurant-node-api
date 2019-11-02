const joi = require('@hapi/joi');

const create = joi.object({
  idGarcon: joi.number().required(),
  data: joi
    .string()
    .min(10)
    .required(),
  codigoComanda: joi
    .string()
    .min(5)
    .required(),
});

const addItem = joi.object({
  idCompra: joi.number().required(),
  idProduto: joi.number().required(),
  quantidade: joi.number().required(),
});

module.exports = { create, addItem };
