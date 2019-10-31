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
      const query = `INSERT INTO endereco (logradouro, numero, bairro, complemento, cidade, uf) VALUES ('${address.logradouro}', '${address.numero}', '${address.bairro}', '${address.complemento}', '${address.cidade}', '${address.uf}');`;

      this.connection.query(query, (error, result) => {
        if (error) {
          return reject(
            new Error(
              `Ocorreu um erro ao gravar os dados: ${error}`,
            ),
          );
        }
        return resolve(result.insertId);
      });
    });
  }

  getById(id) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM endereco WHERE id = ${id};`;

      this.connection.query(query, (error, result) => {
        if (error) {
          return reject(
            new Error(
              `Ocorreu um erro ao gravar os dados: ${error}`,
            ),
          );
        }
        return resolve(result);
      });
    });
  }

  update(address) {
    return new Promise((resolve, reject) => {
      const query = `UPDATE endereco SET logradouro = ${address.logradouro}, numero = ${address.numero}, bairro = ${address.bairro}, complemento = ${address.complemento}, cidade = ${address.cidade}, uf = ${address.uf} WHERE id = ${address.id};`;

      this.connection.query(query, (error, result) => {
        if (error) {
          return reject(
            new Error(
              `Ocorreu um erro ao gravar os dados: ${error}`,
            ),
          );
        }
        return resolve(result);
      });
    });
  }
}

module.exports = AddressRepository;
