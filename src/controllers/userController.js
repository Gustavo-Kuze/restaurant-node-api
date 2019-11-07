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
  try {
    const repo = new UsuarioRepository((err) => res.status(400).send(err));
    const user = await repo.getUserByEmail(req.body.email);

    if (!user) {
      return res.status(400).send(
        // eslint-disable-next-line max-len
        'E-mail não encontrado. Caso seu usuário tenha sido desabilitado, entre em contato com a administração para habilitá-lo outra novamente.',
      );
    }

    const isPasswordValid = await bcjs.compare(req.body.senha, user.senha);
    if (!isPasswordValid) {
      return res.status(400).send('E-mail ou senha incorretos');
    }

    // eslint-disable-next-line no-underscore-dangle
    const token = jwt.sign(
      {
        id: user.id,
        tipo_usuario: user.tipo_usuario,
      },
      process.env.SECRET,
    );
    return res
      .header('access_token', token)
      .header('tipo_usuario', user.tipo_usuario)
      .json({
        token,
        user: { tipoUsuario: user.tipo_usuario, email: user.email },
      });
  } catch (error) {
    console.log(error);
    return res.status(400).send('Ocorreu um erro ao tentar fazer login');
  }
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
