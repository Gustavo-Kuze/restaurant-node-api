const PersonRepository = require('../repository/PersonRepository');

const create = async (req, res) => {
  try {
    const repo = new PersonRepository((err) => res.status(400).send(err));

    const result = await repo.create(req.body);

    return res.json({ id: result });
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
};

const getById = async (req, res) => {
  try {
    const repo = new PersonRepository((err) => res.status(400).send(err));

    const result = await repo.getById(req.params.id);

    return res.json(result);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
};

const update = async (req, res) => {
  try {
    const repo = new PersonRepository((err) => res.status(400).send(err));

    const result = await repo.update({ ...req.body, id: req.params.id });

    return res.json(result);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
};

module.exports = {
  create,
  getById,
  update,
};
