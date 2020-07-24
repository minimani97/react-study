const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  "development": {
    "username": "nodebird",
    "password": process.env.DB_PASSWORD,
    "database": "nodebird_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "nodebird",
    "password": process.env.DB_PASSWORD,
    "database": "nodebird_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "nodebird_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
