/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
       table.increments('user_id').primary();
       table.string('username', 255).unique();
       table.string('email', 255).unique();
    });
   };
   
   /**
    * @param { import("knex").Knex } knex
    * @returns { Promise<void> }
    */
   exports.down = function(knex) {
    return knex.schema.dropTable('users');
   };
   
