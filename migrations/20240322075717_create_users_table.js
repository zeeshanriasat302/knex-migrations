/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users_new', function(table) {
        table.increments('user_id').primary();
        table.string('username', 255).unique();
        table.string('email', 255).unique();
        table.string('polygon_address', 255).unique();
        table.string('stargaze_address', 255).unique();
        table.string('omniflix_address', 255).unique();
        table.string('eth_wallet', 255).unique();
        table.string('discord', 255).unique();
        table.string('twitter', 255).unique();
        table.string('discord_email', 255).unique();
        table.boolean('show_discord');
        table.boolean('show_twitter');
        table.string('web', 255);
        table.string('profile_image', 255);
        table.integer('package_id').defaultTo(1);
        table.integer('status').defaultTo(1);
        table.string('remarks', 255);
        table.timestamp('created_at').defaultTo(knex.fn.now());
     });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('users_new');
};
