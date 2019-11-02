const router = require('express').Router();
const {
  register,
  login,
  deleteUser,
} = require('../controllers/userController');
const validate = require('../middlewares/modelValidation');

router.post('/registrar', validate, register);
router.post('/login', validate, login);
router.delete('/excluir/:id', deleteUser);

module.exports = router;
