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
      return Promise.reject(new Error(error));
    }
  }

  async getUserByEmail(email) {
    try {
      const query =
        'SELECT * FROM usuario WHERE email = ? AND desabilitado = 0';

      return (await this.query(query, [email]))[0];
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  }

  async setPersonalInfo(userId, personId) {
    try {
      const query = 'UPDATE usuario SET id_pessoa = ? WHERE id = ?';

      return (await this.query(query, [personId, userId]))[0];
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  }

  async isEmailRegistered(email) {
    try {
      const query = 'SELECT * FROM usuario WHERE email = ?';
      const result = await this.query(query, [email]);
      return result && result.length > 0;
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  }

  async deleteUser(id) {
    try {
      const query = 'UPDATE usuario SET desabilitado = 1 WHERE id = ?';
      const result = await this.query(query, [id]);
      return result;
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  }
}

module.exports = UserRepository;
