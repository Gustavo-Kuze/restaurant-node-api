const userModels = require('./user');
const addressModels = require('./address');
const personModels = require('./person');
const productModels = require('./product');
const orderModels = require('./order');

const getModel = (url) => {
  if (url.includes('/api/usuario/registrar')) return userModels.register;
  if (url.includes('/api/usuario/login')) return userModels.login;
  if (url.includes('/api/endereco')) {
    return addressModels.createOrUpdateAddress;
  }
  if (url.includes('/api/informacoes-pessoais')) {
    return personModels.createOrUpdatePerson;
  }
  if (url.includes('/api/produto')) {
    return productModels.createOrUpdateProduct;
  }
  if (url.includes('/api/compra/adicionar-item')) {
    return orderModels.addItem;
  }
  if (url.includes('/api/compra')) {
    return orderModels.create;
  }
  return '';
};

module.exports = getModel;
