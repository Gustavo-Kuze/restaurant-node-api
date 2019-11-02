const router = require('express').Router();
const {
  create,
  addItem,
  getTotal,
  updateItemQuantity,
} = require('../controllers/orderController');
const validate = require('../middlewares/modelValidation');
const authenticate = require('../middlewares/auth');

router.post('/', authenticate, validate, create);
router.get('/total/:id', authenticate, getTotal);
router.put('/adicionar-item', authenticate, validate, addItem);
router.put('/atualizar-quantidade', authenticate, validate, updateItemQuantity);
// router.get('/:id', authenticate, getById);

module.exports = router;
