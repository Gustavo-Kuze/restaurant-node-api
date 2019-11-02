const BaseRepository = require('./BaseRepository');

class UserRepository extends BaseRepository {
  async register(user) {
    try {
      const query =
        'INSERT INTO usuario (email, senha, tipo_usuario) VALUES (?, ?, ?);';
      const result = await this.query(query, [
        user.email,
        user.senha,
        user.tipoUsuario,
      ]);
      return result.insertId;
    } catch (error) {
      return error;
    }
  }

  async getUserByEmail(email) {
    try {
      const query =
        'SELECT * FROM usuario WHERE email = ? AND desabilitado = 0';

      return this.query(query, [email]);
    } catch (error) {
      return error;
    }
  }

  async isEmailRegistered(email) {
    try {
      const query = 'SELECT * FROM usuario WHERE email = ?';
      const result = await this.query(query, [email]);
      return result && result.length > 0;
    } catch (error) {
      return error;
    }
  }

  async deleteUser(id) {
    try {
      const query = 'UPDATE usuario SET desabilitado = 1 WHERE id = ?';
      const result = await this.query(query, [id]);
      return result;
    } catch (error) {
      return error;
    }
  }
}

module.exports = UserRepository;
