const express = require('express'); //importando framework de rotas
const routes = require('./routes'); //importando variavel retornada no arquivo routes.js

//importando modulo de seguranca cors
const cors = require('cors');

const app = express(); //instancia app

app.use(cors());

app.use(express.json()); //dizendo que usarei formato json para requests
app.use(routes); //usando rotas importadas pela variavel

app.listen(3333); //porta da aplicacao