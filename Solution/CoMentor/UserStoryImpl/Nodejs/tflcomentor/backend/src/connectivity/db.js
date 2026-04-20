var mysql = require("mysql2");
const dbconfig = {
  host: "192.168.1.149",
  user: "root",
  password: "password",
  database: "tflcomentor_db",
};

const connection = mysql.createConnection(dbconfig);
connection.connect((err) => {
  if (err) {
    console.error("mysql connection failed", err.message);
  }

  console.log("mysql connected");
});

module.exports = connection;
