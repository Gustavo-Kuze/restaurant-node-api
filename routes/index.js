const authRouter = require('./auth');
const postsRouter = require('./posts');
const mysqlRouter = require('./mysql');

module.exports = {
  authRouter,
  postsRouter,
  mysqlRouter,
};
