const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "192.168.1.149",
  user: "root",
  password: "password",
  database: "tflcomentor_db",
  waitForConnections: true,
  connectionLimit: 10,
});

pool.getConnection((err, connection) => {
  if (err) { 
    console.error("Error connecting to database:", err);
  } else {
    console.log("Connected to database successfully!");
    connection.release();
  }
});

module.exports = pool.promise();