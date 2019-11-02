const router = require('express').Router();
const { create, addItem } = require('../controllers/orderController');
const validate = require('../middlewares/modelValidation');
const authenticate = require('../middlewares/auth');

router.post('/', authenticate, validate, create);
router.put('/adicionar-item', authenticate, validate, addItem);
// router.get('/:id', authenticate, getById);

module.exports = router;
