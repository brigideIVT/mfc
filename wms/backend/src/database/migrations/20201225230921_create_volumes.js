exports.up = function(knex) {
    return knex.schema.createTable('volumes', function(table){
        table.increments();
        table.integer('order_id').notNullable();
        table.foreign('order_id').references('id').inTable('orders');
        table.string('situation').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('volumes');
};
