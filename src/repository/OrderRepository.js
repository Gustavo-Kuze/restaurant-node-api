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
      return error;
    }
  }

  async addItem(orderItem) {
    try {
      const createOrderItemQuery =
        'INSERT INTO itemcompra (id_produto, id_compra, quantidade) VALUES (?, ?, ?);';
      const getOrderTotalValue = 'SELECT valor_total FROM compra WHERE id = ?;';
      const updateOrderQuery =
        'UPDATE compra SET valor_total = ? WHERE id = ?;';

      const idOrderItem = (await this.query(createOrderItemQuery, [
        orderItem.idCompra,
        orderItem.idProduto,
        orderItem.quantidade,
      ])).insertId;

      const totalValue = await this.query(getOrderTotalValue, [
        orderItem.idCompra,
      ]);

      await this.query(updateOrderQuery, [totalValue, orderItem.idCompra]);

      return {
        idOrderItem,
        totalValue,
      };
    } catch (error) {
      return error;
    }
  }
}

module.exports = OrderRepository;
