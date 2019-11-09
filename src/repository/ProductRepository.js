const BaseRepository = require('./BaseRepository');

class ProductRepository extends BaseRepository {
  async create(product) {
    try {
      const query =
        // eslint-disable-next-line max-len
        'INSERT INTO produto (preco, nome, descricao, tamanho) VALUES (?, ?, ?, ?);';
      const result = await this.query(query, [
        product.preco,
        product.nome,
        product.descricao,
        product.tamanho,
      ]);
      return result.insertId;
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  }

  async getById(id) {
    try {
      const query = 'SELECT * FROM produto WHERE id = ? AND desabilitado = 0;';
      const result = await this.query(query, [id]);
      return result;
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  }

  async getAllEnabled() {
    try {
      const query = 'SELECT * FROM produto WHERE desabilitado = 0;';
      const result = await this.query(query);
      return result;
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  }

  async getAll() {
    try {
      const query = 'SELECT * FROM produto;';
      const result = await this.query(query);
      return result;
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  }

  async update(product) {
    try {
      const query =
        // eslint-disable-next-line max-len
        'UPDATE produto SET preco = ?, nome = ?, descricao = ?, tamanho = ?, desabilitado = ? WHERE id = ?;';
      const result = await this.query(query, [
        product.preco,
        product.nome,
        product.descricao,
        product.tamanho,
        product.desabilitado || 0,
        product.id,
      ]);
      return result;
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  }

  async setDisabledState(productId, disabled) {
    try {
      const query =
        // eslint-disable-next-line max-len
        'UPDATE produto SET desabilitado = ? WHERE id = ?;';
      const result = await this.query(query, [disabled, productId]);
      return result;
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  }

  async deleteProduct(id) {
    try {
      const query = 'UPDATE produto SET desabilitado = 1 WHERE id = ?;';
      const result = await this.query(query, [id]);
      return result;
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  }
}

module.exports = ProductRepository;
