const User = require('../model/User');

const getUserByEmail = async (email) => User.findOne({ email });

module.exports = {
  getUserByEmail,
};
