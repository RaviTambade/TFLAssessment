const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '192.168.1.149',
    user: 'root',
    password: 'password',
    database: 'tflpmp',
});

module.exports = pool;