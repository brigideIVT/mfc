const connection = require('../database/connection'); //importa o arquivo de conexao com o banco de dados
const { connect } = require('http2');

module.exports = {
    async create(request, response){
        const {rota, orders} = request.body;

        const orders_count = orders.length;
        const situation = 'aberto';

        await connection('minutas').insert({
            rota,
            orders_count,
            situation
        })

        return response.json({id});
    },

    async index(request, response){
        const minutas = await connection('minutas').select('*');

        return response.json(minutas);
    }
}