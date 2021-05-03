const subCats = [
  {
   name: "Fish",
   cat_id: 1 
  },
  {
    name: "Poultry",
    cat_id: 1 
  },
  {
    name: "Livestock",
    cat_id: 1
  },
  {
    name: "Other",
    cat_id: 1
  },
  {
    name: "Greens",
    cat_id: 2
  },
  {
    name: "Roots",
    cat_id: 2
  },
  {
    name: "Stalk",
    cat_id: 2
  },
  {
    name: "Other",
    cat_id: 2
  },
  {
    name: "Citrus",
    cat_id: 3
  },
  {
    name: "Stone",
    cat_id:  3
  },
  {
    name: "Banana",
    cat_id: 3
  },
  {
    name: "Exotic",
    cat_id:  3
  },
  {
    name: "Other",
    cat_id: 3
  },
  {
    name: "Rice",
    cat_id: 4
  },
  {
    name: "Wheat",
    cat_id:  4
  },
  {
    name: "Maize",
    cat_id:  4
  },
  {
    name: "Other",
    cat_id:  4
  },
  {
    name: "Raw / Baking",
    cat_id:  5
  },
  {
    name: "Toasted",
    cat_id:  5
  },
  {
    name: "Salted",
    cat_id:  5
  },
  {
    name: "Dry",
    cat_id:  6
  },
  {
    name: "Canned",
    cat_id:  6
  },
  {
    name: "Mixed",
    cat_id: 6 
  }
]
exports.seed = function(knex) {
  return knex('sub_categories').insert(subCats)
};
