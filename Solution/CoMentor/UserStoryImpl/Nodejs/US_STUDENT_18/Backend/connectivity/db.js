const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "192.168.1.149",
  user: "root",
  password: "password",
  database: "tflcomentor_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

connection.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err.message);
    return;
  }
  console.log("MySQL connected");
});

module.exports = connection;