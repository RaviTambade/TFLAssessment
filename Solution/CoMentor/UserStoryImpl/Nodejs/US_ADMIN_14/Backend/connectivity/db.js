const mysql = require('mysql2');
const { database } = require('../config/dbConfig');

const connection = mysql.createConnection(database);

connection.connect((err) => {
  if (err) {
    console.error('MySQL connection failed:', err.message);
    return;
  }

  console.log('MySQL connected');
});

module.exports = connection;