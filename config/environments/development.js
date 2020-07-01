const { Int } = require("mssql");

module.exports = {
    DB_URL: process.env.DB_URL || 'localhost',
    DB_NAME: process.env.DB_NAME || 'Tesis',
    DB_USER: process.env.DB_USER || 'root',
    DB_USER_PASSWORD: process.env.DB_USER_PASSWORD || '123',
    DB_PORT: parseInt(process.env.DB_PORT)
}