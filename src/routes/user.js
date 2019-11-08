const router = require('express').Router();
const {
  register,
  login,
  deleteUser,
  setPersonalInfo,
} = require('../controllers/userController');
const validate = require('../middlewares/modelValidation');
const authenticate = require('../middlewares/auth');

router.post('/registrar', validate, register);
router.post('/login', validate, login);
router.put('/dados-pessoais', authenticate, validate, setPersonalInfo);
router.delete('/excluir/:id', deleteUser);

module.exports = router;
