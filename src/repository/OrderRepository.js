/* eslint-disable max-len */
const BaseRepository = require('./BaseRepository');

class OrderRepository extends BaseRepository {
  async create(order) {
    try {
      const query =
        // eslint-disable-next-line max-len
        'INSERT INTO compra (id_garcon, data, codigo_comanda) VALUES (?, ?, ?);';
      const result = await this.query(query, [
        order.idGarcon,
        order.data,
        order.codigoComanda,
      ]);

      return result.insertId;
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  }

  async addItem(orderItem) {
    try {
      const createOrderItemQuery =
        'INSERT INTO itemcompra (id_produto, id_compra, quantidade) VALUES (?, ?, ?);';

      const idOrderItem = (await this.query(createOrderItemQuery, [
        orderItem.idProduto,
        orderItem.idCompra,
        orderItem.quantidade,
      ])).insertId;

      return {
        idOrderItem,
      };
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  }

  async updateItemQuantity(orderItem) {
    try {
      const query = 'UPDATE itemcompra set quantidade = ? WHERE id = ?;';

      const result = await this.query(query, [
        orderItem.quantidade,
        orderItem.id,
      ]);

      return result;
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  }

  async getTotal(idCompra) {
    try {
      const query =
        'SELECT SUM(c.quantidade * p.preco) AS total FROM itemcompra c LEFT JOIN produto p ON c.id_produto = p.id WHERE id_compra = ?';

      const result = await this.query(query, [idCompra]);

      return result;
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  }

  async deleteItem(orderItem) {
    try {
      const query = 'DELETE FROM itemcompra WHERE id = ?';

      const result = await this.query(query, [orderItem.id]);

      return result;
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  }

  async deleteAllItems(idCompra) {
    try {
      const query = 'DELETE FROM itemcompra WHERE idCompra = ?';

      const result = await this.query(query, [idCompra]);

      return result;
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  }

  async finishOrder(order) {
    try {
      const query = 'UPDATE compra SET estado = ? WHERE id = ?';

      const result = await this.query(query, [order.estado, order.id]);

      return result;
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  }
}

module.exports = OrderRepository;
