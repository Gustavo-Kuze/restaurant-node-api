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
      const query = `INSERT INTO pessoa (nome, data_nascimento, cpf, rg, telefone1, telefone2, id_endereco, estado_civil) VALUES ('${
        person.nome
      }', '${person.dataNascimento}', '${person.cpf
                || null}', '${person.rg || null}', '${
        person.telefone1
      }', '${person.telefone2 || null}', '${person.idEndereco}', '${
        person.estadoCivil
      }');`;

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
      const query = `SELECT * FROM pessoa WHERE id = ${id};`;

      this.connection.query(query, (error, result) => {
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
      const query = `UPDATE pessoa SET nome = '${
        person.nome
      }', data_nascimento = '${
        person.dataNascimento
      }', cpf = '${person.cpf || null}', rg = '${person.rg
                || null}', telefone1 = '${
        person.telefone1
      }', telefone2 = '${person.telefone2 || null}', id_endereco = '${
        person.idEndereco
      }', estado_civil = '${person.estadoCivil}' WHERE id = ${
        person.id
      };`;

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

module.exports = PersonRepository;
