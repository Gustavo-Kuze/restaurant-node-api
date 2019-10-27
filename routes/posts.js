const router = require('express').Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, (_, res) => {
  res.json({
    posts: {
      title: 'Título do post',
      description: 'Uma parágrafo...',
    },
  });
});

module.exports = router;
