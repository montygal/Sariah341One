const routes = require('express').Router();
const myController = require('../controllers');

routes.get('/', myController.Sariah);
routes.get('/Garrik', myController.Garrik);

module.exports = routes;