const BaseRepository = require('./BaseRepository');

class UserRepository extends BaseRepository {
  register(user) {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO usuario (email, senha, tipo_usuario) VALUES ('${user.email}', '${user.senha}', '${user.tipoUsuario}');`;

      this.connection.connect((err) => {
        if (err) {
          return reject(new Error('Ocorreu um erro ao conectar'));
        }
        this.connection.query(query, (error, result) => {
          if (error) {
            return reject(
              new Error(
                `Ocorreu um erro ao obter os dados: ${error}`,
              ),
            );
          }
          return resolve(result);
        });
      });
    });
  }
}

module.exports = UserRepository;
