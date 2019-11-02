const BaseRepository = require('./BaseRepository');

class PersonRepository extends BaseRepository {
  constructor(errorCallback) {
    super();

    this.connection.connect((err) => {
      if (err && typeof errorCallback === 'function') errorCallback(err);
    });
  }

  create(person) {
    return new Promise((resolve, reject) => {
      const query =
        // eslint-disable-next-line max-len
        'INSERT INTO pessoa (nome, data_nascimento, cpf, rg, telefone1, telefone2, id_endereco, estado_civil) VALUES (?, ?, ?, ?, ?, ?, ?, ?);';

      this.connection.query(
        query,
        [
          person.nome,
          person.dataNascimento,
          person.cpf,
          person.rg,
          person.telefone1,
          person.telefone2,
          person.idEndereco,
          person.estadoCivil,
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
      const query = 'SELECT * FROM pessoa WHERE id = ?;';

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

  update(person) {
    return new Promise((resolve, reject) => {
      const query =
        // eslint-disable-next-line max-len
        'UPDATE pessoa SET nome = ?, data_nascimento = ?, cpf = ?, rg = ?, telefone1 = ?, telefone2 = ?, id_endereco = ?, estado_civil = ? WHERE id = ?;';

      this.connection.query(
        query,
        [
          person.nome,
          person.dataNascimento,
          person.cpf,
          person.rg,
          person.telefone1,
          person.telefone2,
          person.estadoCivil,
          person.id,
        ],
        (error, result) => {
          if (error) {
            return reject(
              new Error(`Ocorreu um erro ao atualizar os dados: ${error}`),
            );
          }
          return resolve(result);
        },
      );
    });
  }

  deletePerson(id) {
    return new Promise((resolve, reject) => {
      const query = 'DELETE FROM pessoa WHERE id = ?';

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

module.exports = PersonRepository;
