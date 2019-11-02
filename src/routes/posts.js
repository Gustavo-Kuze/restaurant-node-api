const router = require('express').Router();
const authenticate = require('../middlewares/auth');

router.get('/', authenticate, (_, res) => {
  res.json({
    posts: {
      title: 'Título do post',
      description: 'Uma parágrafo...',
    },
  });
});

module.exports = router;
