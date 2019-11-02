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

const listItems = async (req, res) => {
  try {
    const repo = new OrderRepository((err) => res.status(400).send(err));

    const result = await repo.listItems(req.params.id);

    return res.json(result);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
};

const deleteItem = async (req, res) => {
  try {
    const repo = new OrderRepository((err) => res.status(400).send(err));

    const result = await repo.deleteItem(req.params.id);

    return res.json(result);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
};

const deleteAllItems = async (req, res) => {
  try {
    const repo = new OrderRepository((err) => res.status(400).send(err));

    const result = await repo.deleteAllItems(req.params.id);

    return res.json(result);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
};

const finishOrder = async (req, res) => {
  try {
    const repo = new OrderRepository((err) => res.status(400).send(err));

    const result = await repo.finishOrder(req.body);

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
  deleteItem,
  deleteAllItems,
  finishOrder,
  listItems,
};
