const BaseRepository = require("./BaseRepository");

class UserRepository extends BaseRepository {
    constructor(errorCallback) {
        super();

        this.connection.connect(err => {
            if (err && typeof errorCallback === "function") errorCallback(err);
        });
    }

    register(user) {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO usuario (email, senha, tipo_usuario) VALUES ('${user.email}', '${user.senha}', '${user.tipoUsuario}');`;

            this.connection.query(query, (error, result) => {
                if (error) {
                    return reject(
                        new Error(
                            `Ocorreu um erro ao gravar os dados: ${error}`
                        )
                    );
                }
                return resolve(result.insertId);
            });
        });
    }

    getUserByEmail(email) {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM usuario WHERE email = '${email}'`;

            this.connection.query(query, (error, result) => {
                if (error) {
                    return reject(
                        new Error(`Ocorreu um erro ao obter os dados: ${error}`)
                    );
                }

                return resolve(result && result[0]);
            });
        });
    }

    isEmailRegistered(email) {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM usuario WHERE email = '${email}'`;

            this.connection.query(query, (error, result) => {
                if (error) {
                    return reject(
                        new Error(`Ocorreu um erro ao obter os dados: ${error}`)
                    );
                }

                return resolve(result && result.length > 0);
            });
        });
    }
}

module.exports = UserRepository;
