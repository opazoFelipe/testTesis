const sql = require('mssql')

const getEnvironmentConfig = require('../../config/environments');

const {  

  DB_URL,
  DB_NAME,
  DB_USER,
  DB_USER_PASSWORD,
  DB_PORT

} = getEnvironmentConfig();


const config = {
  user: DB_USER,
  password: DB_USER_PASSWORD,
  server: DB_URL,
  database: DB_NAME,
  port: DB_PORT,
  "options": {
    "enableArithAbort": true
  }
}

// console.log(config);

const pool = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
  sql, pool
}