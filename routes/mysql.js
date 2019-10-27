const router = require('express').Router();
const mysql = require('mysql');

router.get('/', (_, res) => {
  const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'restaurante',
  });

  con.connect((err) => {
    if (err) return res.status(400).send('Ocorreu um erro ao conectar');
    con.query('SELECT * FROM endereco', (error, result) => {
      if (error) {
        return res
          .status(400)
          .send('Ocorreu um erro ao obter os dados: ' + error);
      }
      res.json(result);
    });
  });
});

module.exports = router;
