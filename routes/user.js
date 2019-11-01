const router = require('express').Router();
const { register, login } = require('../controllers/userController');
const validate = require('../middlewares/modelValidation');

router.post('/registrar', validate, register);
router.post('/login', validate, login);

module.exports = router;
