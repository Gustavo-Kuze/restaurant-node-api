/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) return res.status(400).send('Access Denied');

  try {
    const authenticated = jwt.verify(token, process.env.SECRET);
    req.user = authenticated;
    next();
  } catch (err) {
    return res.status(400).send('Invalid token');
  }
};
