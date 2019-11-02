const BaseRepository = require('./BaseRepository');

class PersonRepository extends BaseRepository {
  async create(person) {
    try {
      const query =
        // eslint-disable-next-line max-len
        'INSERT INTO pessoa (nome, data_nascimento, cpf, rg, telefone1, telefone2, id_endereco, estado_civil) VALUES (?, ?, ?, ?, ?, ?, ?, ?);';

      const result = await this.query(query, [
        person.nome,
        person.dataNascimento,
        person.cpf,
        person.rg,
        person.telefone1,
        person.telefone2,
        person.idEndereco,
        person.estadoCivil,
      ]);
      return result.insertId;
    } catch (error) {
      return error;
    }
  }

  async getById(id) {
    try {
      const query = 'SELECT * FROM pessoa WHERE id = ?;';
      const result = await this.query(query, [id]);
      return result;
    } catch (error) {
      return error;
    }
  }

  async update(person) {
    try {
      const query =
        // eslint-disable-next-line max-len
        'UPDATE pessoa SET nome = ?, data_nascimento = ?, cpf = ?, rg = ?, telefone1 = ?, telefone2 = ?, id_endereco = ?, estado_civil = ? WHERE id = ?;';
      const result = await this.query(query, [
        person.nome,
        person.dataNascimento,
        person.cpf,
        person.rg,
        person.telefone1,
        person.telefone2,
        person.estadoCivil,
        person.id,
      ]);
      return result;
    } catch (error) {
      return error;
    }
  }

  async deletePerson(id) {
    try {
      const query = 'DELETE FROM pessoa WHERE id = ?';
      const result = await this.query(query, [id]);
      return result;
    } catch (error) {
      return error;
    }
  }
}

module.exports = PersonRepository;
