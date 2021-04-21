
exports.up = function(knex) {
  return (
      knex.schema
        .createTable('roles', tbl => {
            // primary key
            tbl.increments('role_id');

            tbl.string('role_name', 64)
                .notNullable()
                .unique();


        })
        .createTable('users', tbl => {
            tbl.increments('user_id');

            tbl.string('username', 64)
                .notNullable()
                .unique();

            tbl.string('password', 256)
                .notNullable();

            tbl.integer('role_id')
                .unsigned()
                .notNullable()
                .references('roles.role_id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
        .createTable('categories', tbl => {
            tbl.increments('cat_id');

            tbl.string('name', 64)
                .notNullable()
                .unique();
                
        })
        .createTable('sub-categories', tbl => {
            tbl.increments('sub_id');

            tbl.string('name',64)
                .notNullable()
                .unique();
        })
  )
};

exports.down = function(knex) {
  
};
