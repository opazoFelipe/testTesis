require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const routes = require('./routes');

const { sql, pool } = require('../../dbConnectors/sqlServer');

const newPool = pool;

const { 

    SERVER_PORT 

} = require('../../../config/http');

const app = express();

    // Config
    app.set('port', SERVER_PORT);

    // Middlewares
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));
    app.use(morgan('dev'));

    // Routes
    app.use(('/'), routes.publicRoutes);
    
    // Starting
module.exports = startServer => {
    return new Promise((resolve, reject) => {
        const http = app.listen(app.get('port'), () => {
            const { port } = http.address();
            console.log('Server on port ' + port);
            resolve();
        });
    });
}




