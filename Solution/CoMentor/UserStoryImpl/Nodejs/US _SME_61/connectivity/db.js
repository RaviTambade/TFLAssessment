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
    console.error("DB Connection Failed:", err.message);
  } else {
    console.log("Database Connected");
  }
});

module.exports = connection;