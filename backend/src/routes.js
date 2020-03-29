const express = require('express');
//creates alleatory text from characters together, to create new id

//celebrate is a validation librabry that connect Joi validation library with Express
const { celebrate, Segments, Joi } = require('celebrate');

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

//validation celebrate() needs to be before user feedback because Express uses middleware method "telefone sem fio"
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(13),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);

routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);

//export modules to make variables availiable to another file
module.exports = routes;