/* eslint-disable max-len */
const BaseRepository = require('./BaseRepository');

class OrderRepository extends BaseRepository {
  create(order) {
    return new Promise((resolve, reject) => {
      const query =
        // eslint-disable-next-line max-len
        'INSERT INTO compra (id_garcon, data, codigo_comanda) VALUES (?, ?, ?);';

      this.connection.query(
        query,
        [order.idGarcon, order.data, order.codigoComanda],
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

  addItem(orderItem) {
    return new Promise((resolve, reject) => {
      const createOrderItemQuery =
        'INSERT INTO itemcompra (id_produto, id_compra, quantidade) VALUES (?, ?, ?);';
      const getOrderTotalValue = 'SELECT valor_total FROM compra WHERE id = ?;';
      const updateOrderQuery =
        'UPDATE compra SET valor_total = ? WHERE id = ?;';

      this.connection.query(
        createOrderItemQuery,
        [orderItem.idCompra, orderItem.idCompra, orderItem.quantidade],
        (error, result) => {
          if (error) {
            return reject(
              new Error(`Ocorreu um erro ao gravar os dados: ${error}`),
            );
          }
          resolve(result.insertId);
          this.connection.query(
            getOrderTotalValue,
            [orderItem.idCompra],
            (errorGetOrder, resultGetOrder) => {
              if (errorGetOrder) {
                return reject(
                  new Error(
                    `Ocorreu um erro ao gravar os dados: ${errorGetOrder}`,
                  ),
                );
              }
              const totalValue = resultGetOrder[0];
              this.connection.query(
                updateOrderQuery,
                [totalValue, orderItem.idCompra],
                (errorUpdateOrder, resultUpdateOrder) => {
                  if (errorUpdateOrder) {
                    return reject(
                      new Error(
                        `Ocorreu um erro ao gravar os dados: ${errorUpdateOrder}`,
                      ),
                    );
                  }
                  return resolve(resultUpdateOrder);
                },
              );
            },
          );
        },
      );
    });
  }

  // getById(id) {
  //   return new Promise((resolve, reject) => {
  //     const query = 'SELECT * FROM compra WHERE id = ?;';

  //     this.connection.query(query, [id], (error, result) => {
  //       if (error) {
  //         return reject(
  //           new Error(`Ocorreu um erro ao obter os dados: ${error}`),
  //         );
  //       }
  //       return resolve(result);
  //     });
  //   });
  // }
}

module.exports = OrderRepository;
