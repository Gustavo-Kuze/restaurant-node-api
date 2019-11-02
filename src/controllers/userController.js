const bcjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UsuarioRepository = require('../repository/UserRepository');

const register = async (req, res) => {
  try {
    const repo = new UsuarioRepository((err) => res.status(400).send(err));
    const doesEmailExist = await repo.isEmailRegistered(req.body.email);

    if (doesEmailExist) {
      return res.status(400).send('E-mail already exists');
    }

    // password hasing
    const salt = await bcjs.genSalt(10);
    const hashedPwd = await bcjs.hash(req.body.senha, salt);

    const result = await repo.register({
      ...req.body,
      senha: hashedPwd,
    });

    return res.json({ id: result });
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
};

const login = async (req, res) => {
  const repo = new UsuarioRepository((err) => res.status(400).send(err));
  const user = await repo.getUserByEmail(req.body.email);

  if (!user) {
    return res.status(400).send('E-mail não encontrado');
  }
  console.log(user);

  const isPasswordValid = await bcjs.compare(req.body.senha, user.senha);
  if (!isPasswordValid) {
    return res.status(400).send('E-mail ou senha incorretos');
  }

  // eslint-disable-next-line no-underscore-dangle
  const token = jwt.sign({ id: user._id }, process.env.SECRET);
  return res.header('access_token', token).send(token);
};

const deleteUser = async (req, res) => {
  try {
    const repo = new UsuarioRepository((err) => res.status(400).send(err));
    repo.deleteUser(req.params.id);
    return res.json({
      ok: true,
    });
  } catch (error) {
    return res.status(400).send('Ocorreu um erro ao tentar excluir o usuário');
  }
};

module.exports = {
  register,
  login,
  deleteUser,
};
