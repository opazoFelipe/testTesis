const userController = require('../controllers');
const router = require('express').Router();

router.get('/', userController.helloWorld);

module.exports = router;