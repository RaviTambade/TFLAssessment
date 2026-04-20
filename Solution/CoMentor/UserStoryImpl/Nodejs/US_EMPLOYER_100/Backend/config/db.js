const mysql = require("mysql2");

const dbConfig = {
  host: "192.168.1.149",
  user: "root",
  password: "password",
  database: "tflcomentor_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

const pool = mysql.createPool(dbConfig);

// Test connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error("MySQL pool connection failed:", err.message);
    return;
  }
  console.log("MySQL pool connected");
  connection.release();
});

module.exports = pool;