// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {
       client: 'mysql',
       connection: {
         host: 'localhost',
         user: 'user',
         password: 'mysql@root@pass123',
         database: 'testmigrations2',
         port: 3306
       },
       migrations: {
         tableName: 'knex_migrations',
         directory: './migrations'
       }
    }
   };
   
  