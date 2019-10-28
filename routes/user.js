const router = require('express').Router();
const { register, login } = require('../controllers/userController');
const validationMiddleware = require('../middlewares/modelValidation');

router.post('/register', validationMiddleware, register);
router.post('/login', validationMiddleware, login);

module.exports = router;
