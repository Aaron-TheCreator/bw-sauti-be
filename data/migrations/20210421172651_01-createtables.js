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
                
            // foreign key pointing to role id
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
          .createTable('sub_categories', tbl => {
              tbl.increments('sub_id');
  
              tbl.string('name',64)
                  .notNullable();
  
              tbl.integer('cat_id')
                  .unsigned()
                  .notNullable()
                  .references('categories.cat_id')
                  .onDelete('CASCADE')
                  .onUpdate('CASCADE');
          })
          .createTable('category_pairs', tbl => {
              tbl.increments('pair_id');
  
              tbl.integer('cat_id')
                  .unsigned()
                  .notNullable()
                  .references('categories.cat_id')
                  .onDelete('CASCADE')
                  .onUpdate('CASCADE');
  
              tbl.integer('sub_id')
                  .unsigned()
                  .notNullable()
                  .references('sub_categories.sub_id')
                  .onDelete('CASCADE')
                  .onUpdate('CASCADE');
          })
          .createTable('products', tbl => {
              tbl.increments('product_id');
  
              tbl.integer('sub_category_id')
                  .unsigned()
                  .notNullable()
                  .references('sub_categories.sub_id')
                  .onDelete('CASCADE')
                  .onUpdate('CASCADE');
  
              tbl.string('product_name', 256)
                  .notNullable()
                  .unique();
  
              
          })
          .createTable('items', tbl => {
              tbl.increments('item_id');
  
              tbl.integer('owner_id')
                  .unsigned()
                  .notNullable()
                  .references('users.user_id')
                  .onDelete('CASCADE')
                  .onUpdate('CASCADE');
  
              tbl.integer('product_id')
                  .unsigned()
                  .notNullable()
                  .references('products.product_id')
                  .onDelete('CASCADE')
                  .onUpdate('CASCADE');
  
              tbl.string('price', 64)
                  .notNullable();
  
              tbl.text('item_description', 1024);
  
          })
    )
  };
  
  exports.down = function(knex) {
    return (
        knex.schema
          .dropTableIfExists('items')
          .dropTableIfExists('products')
          .dropTableIfExists('category_pairs')
          .dropTableIfExists('sub_categories')
          .dropTableIfExists('categories')
          .dropTableIfExists('users')
          .dropTableIfExists('roles')
    );
  };
