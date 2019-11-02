const OrderRepository = require('../repository/OrderRepository');

const create = async (req, res) => {
  try {
    const repo = new OrderRepository((err) => res.status(400).send(err));

    const result = await repo.create(req.body);

    return res.json({ id: result });
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
};

const addItem = async (req, res) => {
  try {
    const repo = new OrderRepository((err) => res.status(400).send(err));

    const result = await repo.addItem(req.body);

    return res.json(result);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
};

const updateItemQuantity = async (req, res) => {
  try {
    const repo = new OrderRepository((err) => res.status(400).send(err));

    const result = await repo.updateItemQuantity(req.body);

    return res.json(result);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
};

const getTotal = async (req, res) => {
  try {
    const repo = new OrderRepository((err) => res.status(400).send(err));

    const result = await repo.getTotal(req.params.id);

    return res.json(result);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
};

module.exports = {
  create,
  addItem,
  getTotal,
  updateItemQuantity,
};
