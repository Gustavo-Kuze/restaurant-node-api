const router = require('express').Router();
const {
  register,
  login,
  deleteUser,
  setPersonalInfo,
  getAllEnabled,
  getAll,
  setDisabledState,
  updateEmail,
  updatePassword,
} = require('../controllers/userController');
const validate = require('../middlewares/modelValidation');
const authenticate = require('../middlewares/auth');

router.post('/registrar', validate, register);
router.post('/login', validate, login);
router.put('/dados-pessoais', authenticate, validate, setPersonalInfo);
router.put('/alterar-desabilitado', authenticate, validate, setDisabledState);
router.put('/alterar-email', authenticate, validate, updateEmail);
router.put('/alterar-senha', authenticate, validate, updatePassword);
router.delete('/excluir/:id', deleteUser);
router.get('/obter', authenticate, getAllEnabled);
router.get('/obter-todos', authenticate, getAll);

module.exports = router;
