
exports.up = function(knex) {
    return knex.schema.table('ongs', function (table) {
        table.timestamps();
      });
};

exports.down = function(knex) {
    return knex.schema.table('ongs', function (table) {
        table.dropColumn('created_at');
        table.dropColumn('updated_at');
      });
};
