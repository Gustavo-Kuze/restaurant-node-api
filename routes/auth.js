const router = require('express').Router();
const { register, login } = require('../controllers/authController');
const validationMiddleware = require('../middlewares/modelValidationMiddleware');

router.post('/register', validationMiddleware, register);
router.post('/login', validationMiddleware, login);

module.exports = router;
