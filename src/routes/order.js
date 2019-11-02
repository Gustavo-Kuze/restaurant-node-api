const router = require('express').Router();
const { create, addItem, getTotal } = require('../controllers/orderController');
const validate = require('../middlewares/modelValidation');
const authenticate = require('../middlewares/auth');

router.post('/', authenticate, validate, create);
router.get('/total/:id', authenticate, getTotal);
router.put('/adicionar-item', authenticate, validate, addItem);
// router.get('/:id', authenticate, getById);

module.exports = router;
