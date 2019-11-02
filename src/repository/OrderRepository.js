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
      const getOrderTotalValue = 'SELECT preco_total FROM compra WHERE id = ?;';
      const getProductPriceById = 'SELECT preco FROM produto WHERE id = ?;';
      const updateOrderQuery =
        'UPDATE compra SET preco_total = ? WHERE id = ?;';

      const idOrderItem = (await this.query(createOrderItemQuery, [
        orderItem.idProduto,
        orderItem.idCompra,
        orderItem.quantidade,
      ])).insertId;

      const orderCurrentTotalValue = (await this.query(getOrderTotalValue, [
        orderItem.idCompra,
      ]))[0].preco_total;

      const productValue = (await this.query(getProductPriceById, [
        orderItem.idProduto,
      ]))[0].preco;

      await this.query(updateOrderQuery, [
        (orderCurrentTotalValue + productValue) * orderItem.quantidade,
        orderItem.idCompra,
      ]);

      return {
        idOrderItem,
        totalValue: orderCurrentTotalValue,
      };
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  }
}

module.exports = OrderRepository;
