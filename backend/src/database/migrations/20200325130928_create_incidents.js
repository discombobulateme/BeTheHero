exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        //knex automaticly creates an id
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        //relational: need to create a column to te relate with ong name
        //it is a string because my ong id is also a string
        table.string('ong_id').notNullable();

        //foreign key, how things are related among tables
        table.foreign('ong_id').references('id').inTable('ongs');
      });
};

//down methos allows undo
exports.down = function(knex) {
    knex.schema.dropTable('incidents');
};