const mysql = require("mysql2");

const dbconfig = {
  host: "localhost",
  user: "root",
  password: "2991",
  database: "tflcomentor_db",
  multipleStatements: true,
};

const connection = mysql.createConnection(dbconfig);
connection.connect((err) => {
  if (err) {
    console.error("mysql connection failed", err.message);
    return;
  }

  console.log("mysql connected");
});

module.exports = connection;
