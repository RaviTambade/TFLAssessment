const mysql = require("mysql2/promise")

// 192.168.1.149
const dbConfig = {
  host: "192.168.1.149",
  user: "root",
  password: "password",
  database: "tflcomentor_db",
}
  
// Create pool
const pool = mysql.createPool(dbConfig)

console.log(" MySQL  Connected")

module.exports = pool