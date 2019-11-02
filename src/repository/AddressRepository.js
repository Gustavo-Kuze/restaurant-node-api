const BaseRepository = require('./BaseRepository');

class AddressRepository extends BaseRepository {
  async create(address) {
    try {
      const query =
        // eslint-disable-next-line max-len
        'INSERT INTO endereco (logradouro, numero, bairro, complemento, cidade, uf) VALUES (?, ?, ?, ?, ?, ?);';
      const result = await this.query(query, [
        address.logradouro,
        address.numero,
        address.bairro,
        address.complemento,
        address.cidade,
        address.uf,
      ]);
      return result.insertId;
    } catch (error) {
      return error;
    }
  }

  async getById(id) {
    try {
      const query = 'SELECT * FROM endereco WHERE id = ?;';
      const result = await this.query(query, [id]);
      return result;
    } catch (error) {
      return error;
    }
  }

  async update(address) {
    try {
      const query =
        // eslint-disable-next-line max-len
        'UPDATE endereco SET logradouro = ?, numero = ?, bairro = ?, complemento = ?, cidade = ?, uf = ? WHERE id = ?;';
      const result = await this.query(query, [
        address.logradouro,
        address.numero,
        address.bairro,
        address.complemento,
        address.cidade,
        address.uf,
        address.id,
      ]);
      return result;
    } catch (error) {
      return error;
    }
  }

  async deleteAddress(id) {
    try {
      const query = 'DELETE FROM endereco WHERE id = ?';
      const result = await this.query(query, [id]);
      return result;
    } catch (error) {
      return error;
    }
  }
}

module.exports = AddressRepository;
