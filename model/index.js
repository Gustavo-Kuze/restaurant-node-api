const userModels = require('./user');
const addressModels = require('./address');
const personModels = require('./person');

const getModel = (url) => {
  if (url.includes('/api/usuario/registrar')) return userModels.register;
  if (url.includes('/api/usuario/login')) return userModels.login;
  if (url.includes('/api/endereco')) {
    return addressModels.createOrUpdateAddress;
  }
  if (url.includes('/api/informacoes-pessoais')) {
    return personModels.createOrUpdatePerson;
  }
  return '';
};

module.exports = getModel;
