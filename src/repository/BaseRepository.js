const mysql = require('mysql');

class BaseRepository {
  constructor(errorCallback) {
    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'restaurante',
    });
    this.connection.connect((err) => {
      if (err && typeof errorCallback === 'function') errorCallback(err);
    });
  }

  query(sql, params = null) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, params, (error, result) => {
        if (error) return reject(new Error(error));
        return resolve(result);
      });
    });
  }
}

module.exports = BaseRepository;
