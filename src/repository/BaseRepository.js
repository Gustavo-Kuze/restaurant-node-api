const mysql = require('mysql');

class BaseRepository {
  constructor() {
    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'restaurante',
    });
  }
}

module.exports = BaseRepository;
