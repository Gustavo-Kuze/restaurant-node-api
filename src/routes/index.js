const userRouter = require('./user');
const postsRouter = require('./posts');
const mysqlRouter = require('./mysql');
const addressRouter = require('./address');
const personRouter = require('./person');
const productRouter = require('./product');

module.exports = {
  userRouter,
  postsRouter,
  mysqlRouter,
  addressRouter,
  personRouter,
  productRouter,
};
