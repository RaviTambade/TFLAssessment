const mysql = require("mysql2");

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "yash0925",
  database: "tflcomentor_db",
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err, conn) => {
  if (err) {
    console.error("MySQL connection failed:", err.message);
    return;
  }
  console.log("MySQL connected");
});

module.exports = connection;