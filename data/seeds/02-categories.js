const categories = [
  {
    name: "Animal Products"
  },
  {
    name: "Vegetables"
  },
  {
    name: "Fruits"
  },
  {
    name: "Cereals"
  },
  {
    name: "Seeds & Nuts"
  },
  {
    name: "Beans"
  },
]
exports.seed = function(knex) {
  return knex('categories').insert(categories)
};
