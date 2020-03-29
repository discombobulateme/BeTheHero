
//up method creates a table
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        //add #2 because a State symbol in Brazil takes only 2 characters, always
        table.string('uf', 2).notNullable();
      });
};

//down methos allows undo
exports.down = function(knex) {
    knex.schema.dropTable("ongs");
};
