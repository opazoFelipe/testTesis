const devolpmentEnvConfig = require('./development');

module.exports = getEnvironmentConfig => {

    const { NODE_ENV } = process.env;

    let envConfig = {};

    if(NODE_ENV !== 'development') {

    } else {
        envConfig = devolpmentEnvConfig;
    }

    return envConfig;
}