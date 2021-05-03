const rolesArr = [
  {
    role_name : "user",
  },
  {
    role_name : "owner"
  }
];


exports.seed = function(knex) {
  return knex('roles').insert(rolesArr);
};
