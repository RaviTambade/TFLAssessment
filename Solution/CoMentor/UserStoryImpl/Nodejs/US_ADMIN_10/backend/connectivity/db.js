const mysql = require("mysql2");

function createDbConnection(dbConfig) {
  // The concrete connection is created here so callers can inject config from outside.
  const connection = mysql.createConnection(dbConfig);

  connection.connect((err) => {
    if (err) {
      console.error("MySQL connection failed:", err.message);
      return;
    }

    console.log("MySQL connected");
  });

  return connection;
}

module.exports = createDbConnection;
