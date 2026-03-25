/**
 * Database Connection Module
 * Establishes and manages MySQL connection
 * Follows SOLID Principle: Single Responsibility (only manages DB connection)
 */

const mysql = require("mysql2");

const dbConfig = {
  host: "192.168.1.149",
  user: "root",
  password: "password",
  database: "tflcomentor_db",
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err.message);
    return;
  }
  console.log("MySQL connected successfully");
});

module.exports = connection;
