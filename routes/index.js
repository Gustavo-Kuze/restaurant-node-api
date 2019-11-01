const userRouter = require('./user');
const postsRouter = require('./posts');
const mysqlRouter = require('./mysql');
const addressRouter = require('./address');

module.exports = {
  userRouter,
  postsRouter,
  mysqlRouter,
  addressRouter,
};
