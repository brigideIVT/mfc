exports.up = function(knex) {
    return knex.schema.createTable('orders', function(table){
        table.increments();
        table.integer('minuta_id').notNullable();
        table.foreign('minuta_id').references('id').inTable('minutas');
        table.string('volumes_count').notNullable();
        table.string('situation').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('orders');
};
