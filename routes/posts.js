const router = require('express').Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, (_, res) => {
  /**
     * accessing token data for testing
     *   res.send(req.user);
     *
     */
  res.json({
    posts: {
      title: 'Tanto faz',
      description: 'O louco bicho!',
    },
  });
});

module.exports = router;
