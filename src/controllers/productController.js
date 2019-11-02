const ProductRepository = require('../repository/ProductRepository');

const create = async (req, res) => {
  try {
    const repo = new ProductRepository((err) => res.status(400).send(err));

    const result = await repo.create(req.body);

    return res.json({ id: result });
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
};

const getById = async (req, res) => {
  try {
    const repo = new ProductRepository((err) => res.status(400).send(err));

    const result = await repo.getById(req.params.id);

    return res.json(result);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
};

const update = async (req, res) => {
  try {
    const repo = new ProductRepository((err) => res.status(400).send(err));

    const result = await repo.update({ ...req.body, id: req.params.id });

    return res.json(result);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const repo = new ProductRepository((err) => res.status(400).send(err));
    repo.deleteProduct(req.params.id);
    return res.json({
      ok: true,
    });
  } catch (error) {
    return res.status(400).send('Ocorreu um erro ao tentar excluir o produto');
  }
};

module.exports = {
  create,
  getById,
  update,
  deleteProduct,
};
