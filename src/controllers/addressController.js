const AddressRepository = require('../repository/AddressRepository');

const create = async (req, res) => {
  try {
    const repo = new AddressRepository((err) => res.status(400).send(err));

    const result = await repo.create(req.body);

    return res.json({ id: result });
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
};

const getById = async (req, res) => {
  try {
    const repo = new AddressRepository((err) => res.status(400).send(err));

    const result = await repo.getById(req.params.id);

    return res.json(result);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
};

const update = async (req, res) => {
  try {
    const repo = new AddressRepository((err) => res.status(400).send(err));

    const result = await repo.update({ ...req.body, id: req.params.id });

    return res.json(result);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
};

const deleteAddress = async (req, res) => {
  try {
    const repo = new AddressRepository((err) => res.status(400).send(err));
    repo.deleteAddress(req.params.id);
    return res.json({
      ok: true,
    });
  } catch (error) {
    return res.status(400).send('Ocorreu um erro ao tentar excluir o endereço');
  }
};

module.exports = {
  create,
  getById,
  update,
  deleteAddress,
};
