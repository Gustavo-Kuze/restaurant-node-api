const router = require('express').Router();
const { create, getById, update } = require('../controllers/addressController');
const validate = require('../middlewares/modelValidation');
const authenticate = require('../middlewares/auth');

router.post('/', authenticate, validate, create);
router.get('/:id', authenticate, getById);
router.put('/:id', authenticate, validate, update);

module.exports = router;
