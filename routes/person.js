const router = require('express').Router();
const { create, getById, update } = require('../controllers/personController');
const validationMiddleware = require('../middlewares/modelValidation');
const authenticate = require('../middlewares/auth');

router.post('/', authenticate, validationMiddleware, create);
router.get('/:id', authenticate, validationMiddleware, getById);
router.put('/:id', authenticate, validationMiddleware, update);

module.exports = router;
