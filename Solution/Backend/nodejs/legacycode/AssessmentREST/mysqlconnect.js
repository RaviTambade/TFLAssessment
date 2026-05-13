//mysql connection string metadata


'use strict';
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'assessmentdb'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("MySQL Connected!");
});

module.exports = connection;
