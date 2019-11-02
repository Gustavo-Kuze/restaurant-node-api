const BaseRepository = require('./BaseRepository');

class ProductRepository extends BaseRepository {
  constructor(errorCallback) {
    super();

    this.connection.connect((err) => {
      if (err && typeof errorCallback === 'function') errorCallback(err);
    });
  }

  create(product) {
    return new Promise((resolve, reject) => {
      const query =
        // eslint-disable-next-line max-len
        'INSERT INTO produto (preco, nome, descricao, tamanho) VALUES (?, ?, ?, ?);';

      this.connection.query(
        query,
        [product.preco, product.nome, product.descricao, product.tamanho],
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
      const query = 'SELECT * FROM produto WHERE id = ? AND desabilitado = 0;';

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

  getAllEnabled() {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM produto WHERE desabilitado = 0;';

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

  getAll() {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM produto;';

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

  update(product) {
    return new Promise((resolve, reject) => {
      const query =
        // eslint-disable-next-line max-len
        'UPDATE produto SET preco = ?, nome = ?, descricao = ?, tamanho = ?, desabilitado = ? WHERE id = ?;';

      this.connection.query(
        query,
        [
          product.preco,
          product.nome,
          product.descricao,
          product.tamanho,
          product.desabilitado || 0,
          product.id,
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

  deleteProduct(id) {
    return new Promise((resolve, reject) => {
      const query = 'UPDATE produto SET desabilitado = 1 WHERE id = ?;';

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

module.exports = ProductRepository;
