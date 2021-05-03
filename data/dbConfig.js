// knex instance
const knex = require('knex');

// config object
const config = require('../knexfile.js');

module.exports = knex(config.development);