const startServer = require('./src/modules/server');

startServer()
    .catch(err => {
        console.warn('Hubo un error al iniciar la app: ' + err);
        process.exit(-1);
    });

