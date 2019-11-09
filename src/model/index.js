const userModels = require('./user');
const addressModels = require('./address');
const personModels = require('./person');
const productModels = require('./product');
const orderModels = require('./order');

const getModel = (url) => {
  if (url.includes('/api/usuario/registrar')) return userModels.register;
  if (url.includes('/api/usuario/login')) return userModels.login;
  if (url.includes('/api/usuario/dados-pessoais')) {
    return userModels.setPersonalInfo;
  }
  if (url.includes('/api/usuario/alterar-desabilitado')) {
    return userModels.setDisabledState;
  }
  if (url.includes('/api/usuario/alterar-email')) {
    return userModels.updateEmail;
  }
  if (url.includes('/api/usuario/alterar-senha')) {
    return userModels.updatePassword;
  }
  if (url.includes('/api/endereco')) {
    return addressModels.createOrUpdateAddress;
  }
  if (url.includes('/api/informacoes-pessoais/endereco')) {
    return personModels.setPersonAddress;
  }
  if (url.includes('/api/informacoes-pessoais')) {
    return personModels.createOrUpdatePerson;
  }
  if (url.includes('/api/produto/alterar-desabilitado')) {
    return productModels.setDisabledState;
  }
  if (url.includes('/api/produto')) {
    return productModels.createOrUpdateProduct;
  }
  if (url.includes('/api/compra/adicionar-item')) {
    return orderModels.addItem;
  }
  if (url.includes('/api/compra/atualizar-quantidade')) {
    return orderModels.updateQuantity;
  }
  if (url.includes('/api/compra/finalizar')) {
    return orderModels.finishOrder;
  }
  if (url.includes('/api/compra')) {
    return orderModels.create;
  }
  return '';
};

module.exports = getModel;
