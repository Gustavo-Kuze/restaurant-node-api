const joi = require('@hapi/joi');

const createOrUpdateProduct = joi.object({
  preco: joi.number().required(),
  nome: joi
    .string()
    .min(5)
    .max(45)
    .required(),
  descricao: joi
    .string()
    .min(5)
    .max(100)
    .required(),
  tamanho: joi
    .string()
    .min(1)
    .max(10)
    .required(),
});

const setDisabledState = joi.object({
  produtoId: joi.number().required(),
  desabilitado: joi.number().required(),
});

module.exports = { createOrUpdateProduct, setDisabledState };
