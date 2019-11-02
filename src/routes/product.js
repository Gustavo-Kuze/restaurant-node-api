const router = require('express').Router();
const {
  create,
  getById,
  update,
  deleteProduct,
} = require('../controllers/productController');
const validate = require('../middlewares/modelValidation');
const authenticate = require('../middlewares/auth');

router.post('/', authenticate, validate, create);
router.get('/:id', authenticate, getById);
router.put('/:id', authenticate, validate, update);
router.delete('/:id', deleteProduct);

module.exports = router;
