const mysql = require("mysql2");

const dbConfig = {
  host: "192.168.1.62",
  user: "root",
  password: "password",
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