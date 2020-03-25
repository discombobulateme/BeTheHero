const express = require('express');
//creates alleatory text from characters together, to create new id

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//detaching routes module into new variable
const routes = express.Router();

routes.post('/sessions', SessionController.create);

//we don't need this for the application
//but with this we can follow the registers on the table
//"rota de listagem"
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

//export modules to make variables availiable to another file
module.exports = routes;