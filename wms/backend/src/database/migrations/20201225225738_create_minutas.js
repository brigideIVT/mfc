exports.up = function(knex) {
    return knex.schema.createTable('minutas', function(table){
        table.increments().primary();
        table.string('rota').notNullable();
        table.integer('orders_count').notNullable();
        table.string('situation').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('minutas');
};
