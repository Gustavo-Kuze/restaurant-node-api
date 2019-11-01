const userModels = require('./user');
const addressModels = require('./address');

const getModel = (url) => {
  if (url.includes('/api/usuario/registrar')) return userModels.register;
  if (url.includes('/api/usuario/login')) return userModels.login;
  if (url.includes('/api/endereco/')) {
    return addressModels.createOrUpdateAddress;
  }
  return '';
};

module.exports = getModel;
