 const knex = require('knex'); //importa knex
const config = require('../../knexfile'); //importa config da knexfile

const connection = knex(config.development); //usando a conexao de development para a conexao

module.exports = connection; //exporta a conexao