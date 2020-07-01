const privateRouter = require('express').Router();
const publicRouter = require('express').Router();

const userRoutes = require('../../user/infraestructure/routes');

publicRouter.use(userRoutes);

const routes = {
    publicRoutes: publicRouter,
    privateRoutes: privateRouter
}

module.exports = routes;