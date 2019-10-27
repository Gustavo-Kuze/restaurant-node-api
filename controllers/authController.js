const bcjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validateRegister, validateLogin } = require('../validation');
const { getUserByEmail } = require('../services/loginService');
const User = require('../model/User');

const register = async (req, res) => {
  const validationResults = validateRegister(req.body);

  if (!validationResults.isValid) {
    res.status(400).send(validationResults.message);
  }

  try {
    const doesEmailExist = await getUserByEmail({ email: req.body.email });

    if (doesEmailExist) {
      return res.status(400).send('E-mail already exists');
    }

    // password hasing
    const salt = await bcjs.genSalt(10);
    const hashedPwd = await bcjs.hash(req.body.password, salt);

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPwd,
    });

    const savedUser = await user.save();
    return res.send(savedUser.id);
  } catch (err) {
    console.log(err);
    return res.status(400).send('deu ruim');
  }
};

const login = async (req, res) => {
  const validationResults = validateLogin(req.body);

  if (!validationResults.isValid) {
    return res.status(400).send(validationResults.message);
  }
  const user = await getUserByEmail(req.body.email);

  if (!user) return res.status(400).send('E-mail not found');

  const isPasswordValid = await bcjs.compare(
    req.body.password,
    user.password,
  );
  if (!isPasswordValid) return res.status(400).send('Incorrect password');

  // eslint-disable-next-line no-underscore-dangle
  const token = jwt.sign({ id: user._id }, process.env.SECRET);
  res.header('access_token', token).send(token);
  return res.send('LoggedIn!');
};

module.exports = {
  register,
  login,
};
