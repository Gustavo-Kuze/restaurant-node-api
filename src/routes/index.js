const userRouter = require('./user');
const postsRouter = require('./posts');
const mysqlRouter = require('./mysql');
const addressRouter = require('./address');
const personRouter = require('./person');

module.exports = {
  userRouter,
  postsRouter,
  mysqlRouter,
  addressRouter,
  personRouter,
};
