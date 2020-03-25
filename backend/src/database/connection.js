const knex = require('knex');
const configuration = require('../../knexfile');

//connection with development environment
const connection = knex(configuration.development);

module.exports = connection;