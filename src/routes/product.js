const router = require('express').Router();
const {
  create,
  getById,
  getAll,
  getAllEnabled,
  update,
  deleteProduct,
  setDisabledState,
} = require('../controllers/productController');
const validate = require('../middlewares/modelValidation');
const authenticate = require('../middlewares/auth');

router.post('/', authenticate, validate, create);
router.get('/todos', authenticate, getAll);
router.get('/:id', authenticate, getById);
router.get('/', authenticate, getAllEnabled);
router.put('/alterar-desabilitado', authenticate, validate, setDisabledState);
router.put('/:id', authenticate, validate, update);
router.delete('/:id', deleteProduct);

module.exports = router;
