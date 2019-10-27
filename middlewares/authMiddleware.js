/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    let token = req.headers['x-access-token'] || req.headers.authorization;
    if (token.startsWith('Bearer ')) token = token.slice(7, token.length);

    if (!token) return res.status(400).send('Acesso Negado');
    const authenticated = jwt.verify(token, process.env.SECRET);
    req.user = authenticated;
    next();
  } catch (err) {
    return res.status(400).send('O token de acesso era inválido');
  }
};
