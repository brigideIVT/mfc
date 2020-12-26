const express = require('express'); //usar framework de rotas
const connection = require('./database/connection'); //importa o arquivo de conexao com o banco de dados
const { request } = require('http');

//import dos controllers
const MinutaController = require('./controllers/MinutaController');


const routes = express.Router(); //salvando modulo de rotas do express em uma nova variavel


//rota para autenticacao do usuario
routes.post('/minuta', MinutaController.create);
routes.get('/minuta', MinutaController.index); 


module.exports = routes; //exporta variavel de rotas