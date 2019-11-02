const BaseRepository = require('./BaseRepository');

class AddressRepository extends BaseRepository {
  constructor(errorCallback) {
    super();

    this.connection.connect((err) => {
      if (err && typeof errorCallback === 'function') errorCallback(err);
    });
  }

  create(address) {
    return new Promise((resolve, reject) => {
      const query =
        // eslint-disable-next-line max-len
        'INSERT INTO endereco (logradouro, numero, bairro, complemento, cidade, uf) VALUES (?, ?, ?, ?, ?, ?);';

      this.connection.query(
        query,
        [
          address.logradouro,
          address.numero,
          address.bairro,
          address.complemento,
          address.cidade,
          address.uf,
        ],
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

  getById(id) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM endereco WHERE id = ?;';

      this.connection.query(query, [id], (error, result) => {
        if (error) {
          return reject(
            new Error(`Ocorreu um erro ao obter os dados: ${error}`),
          );
        }
        return resolve(result);
      });
    });
  }

  update(address) {
    return new Promise((resolve, reject) => {
      const query =
        // eslint-disable-next-line max-len
        'UPDATE endereco SET logradouro = ?, numero = ?, bairro = ?, complemento = ?, cidade = ?, uf = ? WHERE id = ?;';

      this.connection.query(
        query,
        [
          address.logradouro,
          address.numero,
          address.bairro,
          address.complemento,
          address.cidade,
          address.uf,
          address.id,
        ],
        (error, result) => {
          if (error) {
            return reject(
              new Error(`Ocorreu um erro ao gravar os dados: ${error}`),
            );
          }
          return resolve(result);
        },
      );
    });
  }
}

module.exports = AddressRepository;
