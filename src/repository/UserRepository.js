const BaseRepository = require('./BaseRepository');

class UserRepository extends BaseRepository {
  constructor(errorCallback) {
    super();

    this.connection.connect((err) => {
      if (err && typeof errorCallback === 'function') errorCallback(err);
    });
  }

  register(user) {
    return new Promise((resolve, reject) => {
      const query =
        'INSERT INTO usuario (email, senha, tipo_usuario) VALUES (?, ?, ?);';

      this.connection.query(
        query,
        [user.email, user.senha, user.tipoUsuario],
        (error, result) => {
          if (error) {
            return reject(
              new Error(`Ocorreu um erro ao gravar os dados: ${error}`),
            );
          }
          return resolve(result.insertId);
        },
      );
    });
  }

  getUserByEmail(email) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM usuario WHERE email = ?';

      this.connection.query(query, [email], (error, result) => {
        if (error) {
          return reject(
            new Error(`Ocorreu um erro ao obter os dados: ${error}`),
          );
        }

        return resolve(result && result[0]);
      });
    });
  }

  isEmailRegistered(email) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM usuario WHERE email = ?';

      this.connection.query(query, [email], (error, result) => {
        if (error) {
          return reject(
            new Error(`Ocorreu um erro ao obter os dados: ${error}`),
          );
        }

        return resolve(result && result.length > 0);
      });
    });
  }

  deleteUser(id) {
    return new Promise((resolve, reject) => {
      const query = 'UPDATE usuario SET desabilitado = 1 WHERE id = ?';

      this.connection.query(query, [id], (error, result) => {
        if (error) {
          return reject(
            new Error(`Ocorreu um erro ao excluir os dados: ${error}`),
          );
        }

        return resolve(result && result.length > 0);
      });
    });
  }
}

module.exports = UserRepository;
