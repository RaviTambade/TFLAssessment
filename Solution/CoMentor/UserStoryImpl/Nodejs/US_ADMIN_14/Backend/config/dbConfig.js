const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  database: {
    host: process.env.DB_HOST || '192.168.1.149',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'tflcomentor_db',
  },
  server: {
    port: Number(process.env.PORT) || 3898,
  },
};
