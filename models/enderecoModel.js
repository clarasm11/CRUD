const db = require('../config/db');

const Endereco = {
    create: (endereco, callback) => {
        const query = `
            INSERT INTO enderecos (rua, numero, complemento, bairro, cidade, estado, cep) 
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            
            endereco.rua,
            endereco.numero,
            endereco.complemento,
            endereco.bairro,
            endereco.cidade,
            endereco.estado,
            endereco.cep
        ];
        db.query(query, values, (err, results) => {
            if (err) return callback(err);
            callback(null, results.insertId);
        });
    },

    getAll: (callback) => {
        db.query('SELECT * FROM enderecos', (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },

    findById: (id, callback) => {
        db.query('SELECT * FROM enderecos WHERE id = ?', [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]);
        });
    },

    update: (id, endereco, callback) => {
        const query = `
            UPDATE enderecos SET 
            rua = ?, numero = ?, complemento = ?, bairro = ?, cidade = ?, estado = ?, cep = ?
            WHERE id = ?
        `;
        const values = [
            
            endereco.rua,
            endereco.numero,
            endereco.complemento,
            endereco.bairro,
            endereco.cidade,
            endereco.estado,
            endereco.cep,
            id
        ];
        db.query(query, values, (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },

    delete: (id, callback) => {
        db.query('DELETE FROM enderecos WHERE id = ?', [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }
};

module.exports = Endereco;
